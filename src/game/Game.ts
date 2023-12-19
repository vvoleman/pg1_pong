import AbstractGameMode from "@/game/modes/AbstractGameMode";
import IControlList, {setupControl} from "@/game/controls/IControl";
import gameControls from "@/game/controls/GameControl";
import {Keys} from "@/game/controls/GameControl";
import ControlsManager from "@/managers/ControlsManager";
import Screen from "@/game/Screen";
import Sphere from "@/objects/Sphere";
import Borders, {Sides} from "@/game/Borders";
import Debug from "@/managers/Debug";
import Observable from "@/objects/base/Observable";

export enum BallEvent {
    COLLISION = 'collision'
}

export enum GameEvent {
    GAME_OVER = 'game-over',
    EXIT = 'exit',
}

export default class Game extends Observable{

    protected gameMode: AbstractGameMode;

    protected screen!: Screen;

    protected ball!: Sphere;

    protected borders!: Borders

    public constructor(gameMode: AbstractGameMode) {
        super();
        this.gameMode = gameMode;

        this.setupScreen()
        this.setupBall()
        this.setupBorders()

        this.gameMode.onSetup(this)

        this.setControls()
    }

    public togglePause(): void {
        const playing = this.screen.isPlaying()
        this.screen.setPlay(!playing)
        Debug.getInstance().debug('Game', {isRunning: !playing})
        this.gameMode.onPause()
    }

    public exit(message: string): void {
        this.notify(GameEvent.GAME_OVER, {message})
        this.screen.setPlay(false)
    }

    public start(): void {
        this.togglePause()
        this.screen.animate()

        this.gameMode.onStart()
    }

    public reset(): void {
        this.gameMode.onReset()
        ControlsManager.getInstance().clearAll()
        this.screen.reset()
    }

    protected setControls(): void
    {
        const game = this.getGameControls()
        const mode = this.gameMode.getGameControls()
        const manager = ControlsManager.getInstance()

        // loop every attribute in game
        for (const name in game) {
            manager.add(name, game[name])
        }

        for (const name in mode) {
            manager.add(name, mode[name])
        }
    }

    public getBall(): Sphere {
        return this.ball
    }

    public getScreen(): Screen {
        return this.screen
    }

    public getBorders(): Borders {
        return this.borders
    }

    protected getGameControls(): IControlList {
        const controls = gameControls
        controls[Keys.PAUSE].keypress = () => this.togglePause()
        setupControl(controls[Keys.BALL_LEFT], ()=>this.ball.getVelocity().x = -1, ()=>this.ball.getVelocity().x = 0)
        setupControl(controls[Keys.BALL_RIGHT], ()=>this.ball.getVelocity().x = 1, ()=>this.ball.getVelocity().x = 0)
        setupControl(controls[Keys.BALL_UP], ()=>this.ball.getVelocity().y = 1, ()=>this.ball.getVelocity().y = 0)
        setupControl(controls[Keys.BALL_DOWN], ()=>this.ball.getVelocity().y = -1, ()=>this.ball.getVelocity().y = 0)
        controls[Keys.STOP_BALL].keypress = () => this.ball.getVelocity().set(0, 0, 0)
        return controls
    }

    private setupScreen(): void {
        this.screen = new Screen()
    }

    private setupBorders(): void {
        this.borders = Borders.getInstance()
        this.borders.setDept(this.ball.getRadius() * 2)

        this.screen.getScene().add(this.borders.getObject())
    }

    private setupBall(): void {
        this.ball = new Sphere('white')
        this.ball.observe(BallEvent.COLLISION, (side: { side: Sides }) => {
            this.gameMode.onBallBorderCollision(side.side)
        })
        this.screen.addUpdatableObject('ball', this.ball)
    }


}
