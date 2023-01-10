import AbstractGameMode from "@/game/modes/AbstractGameMode";
import IControlList from "@/game/controls/IControl";
import gameControls from "@/game/controls/GameControl";
import {Keys} from "@/game/controls/GameControl";
import ControlsManager from "@/managers/ControlsManager";
import Screen from "@/game/Screen";
import Sphere from "@/objects/Sphere";
import Borders, {Sides} from "@/game/Borders";
import ClosestBorderSide from "@/objects/debug/ClosestBorderSide";
import Debug from "@/managers/Debug";
import Observable from "@/objects/Observable";

export enum BallEvent {
    COLLISION = 'collision'
}

export enum GameEvent {
    GAME_OVER = 'game-over',
    EXIT = 'exit',
}

export default class _Game extends Observable{

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
        console.log(message)
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
        this.screen.reset()
        console.log('reseting')
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

        return controls
    }

    private setupScreen(): void {
        this.screen = new Screen()
    }

    private setupBorders(): void {
        this.borders = Borders.getInstance()
        this.borders.setDept(this.ball.getRadius() * 2)

        this.screen.getScene().add(this.borders.getObject())
        const line = new ClosestBorderSide(this.ball)
        this.screen.addUpdatableObject('closest',line)
    }

    private setupBall(): void {
        this.ball = new Sphere('white')
        this.ball.observe(BallEvent.COLLISION, (side: { side: Sides }) => {
            this.gameMode.onBallBorderCollision(side.side)
        })
        this.screen.addUpdatableObject('ball', this.ball)
    }


}