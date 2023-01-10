import AbstractGameMode from "@/game/modes/AbstractGameMode";
import Player, { PlayerSide} from "@/game/Player";
import {setupControl} from "@/game/controls/IControl";
import gameControls, {Keys} from "@/game/controls/NormalGameControl";
import IControlList from "@/game/controls/IControl";
import Borders, {Sides} from "@/game/Borders";
import _Game from "@/game/_Game";
import Cube from "@/objects/Cube";
import PositionVector from "@/containers/PositionVector";
import VelocityVector from "@/containers/VelocityVector";
import BallMovementManager from "@/managers/BallMovementManager";
import SoundPlayer, {GameSound} from "@/game/SoundPlayer";
import Scoreboard from "@/game/Scoreboard";

export default class NormalGameMode extends AbstractGameMode {

    protected players: Player[] = []
    protected movement!: BallMovementManager
    protected maxPoints: number

    protected borders!: Borders

    constructor(maxPoints: number = 5) {
        super();
        this.maxPoints = maxPoints;
    }

    onSetup(game: _Game) {
        super.onSetup(game);

        this.borders = game.getBorders()
        this.setupPlayers()
        this.setupCollision()
    }

    onStart() {
        super.onStart();

        this.refreshBallSpeed()
    }

    onReset() {
        super.onReset();
        Scoreboard.removeInstance()
    }

    getDescription(): string {
        return "Výchozí hra. Hráč vs Hráč.";
    }

    getName(): string {
        return "Normální hra";
    }

    getGameControls(): IControlList {
        const controls = gameControls

        // Left player up
        setupControl(
            controls[Keys.LEFT_PLAYER_UP],
            () => this.players[0].moveUp(true),
            () => this.players[0].moveUp(false)
        )

        // Left player down
        setupControl(
            controls[Keys.LEFT_PLAYER_DOWN],
            () => this.players[0].moveDown(true),
            () => this.players[0].moveDown(false)
        )

        // Left player up
        setupControl(
            controls[Keys.RIGHT_PLAYER_UP],
            () => this.players[1].moveUp(true),
            () => this.players[1].moveUp(false)
        )

        // Left player down
        setupControl(
            controls[Keys.RIGHT_PLAYER_DOWN],
            () => this.players[1].moveDown(true),
            () => this.players[1].moveDown(false)
        )

        //Escape
        controls[Keys.EXIT].keyup = () => this.game.exit("Hra byla ukončena uživatelem.")
        console.log(controls)
        return controls
    }

    onBallBorderCollision(side: Sides): void {
        if (side === Sides.TOP || side === Sides.BOTTOM) {
            return
        }

        this.game.togglePause()
        const player = side === Sides.LEFT ? this.players[1] : this.players[0]

        this.scorePoint(player)
    }

    protected scorePoint(player: Player): void {
        const ball = this.game.getBall()
        SoundPlayer.getInstance().play(GameSound.SCORE)
        player.addPoint()
        ball.setPosition(new PositionVector(0, 0, 0))

        console.log(player.getScore(), this.maxPoints)
        if (player.getScore() >= this.maxPoints) {
            this.game.exit(`Hráč v${player.getSide()==='left'?'levo':'pravo'} vyhrál!`)
            return
        }

        this.movePlayers(0)
        this.refreshBallSpeed(player.getSide() === PlayerSide.LEFT)
        // this.game.togglePause()
    }

    private setupCollision(): void {
        this.movement = new BallMovementManager(this.players, this.game.getBall())
    }

    private movePlayers(y: number): void{
        for (const player of this.players) {
            player.getObject().getPosition().y = y
        }
    }

    protected refreshBallSpeed(dir: boolean = false): void {
        const sign = dir ? 1 : -1;
        this.game.getBall().setVelocity(new VelocityVector(sign*.3, .3, 0))
    }

    protected setupPlayers(): void {
        const colors = ["blue", "red"];
        const sides = [PlayerSide.LEFT, PlayerSide.RIGHT];
        const halfWidth = this.borders.width / 2;

        for (let i = 0; i < 2; i++) {
            // Create cube

            const cube = new Cube({
                width: 1,
                height: 3
            }, colors[i])

            cube.setBorders(this.borders)

            const player = new Player(cube, sides[i])
            player.setSpeed(.5)
            const sign = i === 0 ? -1 : 1;
            const x = sign * (halfWidth) + -sign * 2;
            cube.setPosition(new PositionVector(x, 0, 0))

            // Add player to players
            this.game.getScreen().addUpdatableObject(sides[i], cube)
            this.players.push(player)
        }

        Scoreboard.setup({left: this.players[0], right: this.players[1]})
    }

}