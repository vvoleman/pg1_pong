import Player, {PlayerEvent} from "@/game/Player";
import Cube from "@/objects/Cube";
import Screen from "@/game/Screen";
import Sphere from "@/objects/Sphere";
import Borders from "@/game/Borders";
import Collision from "@/managers/Collision";
import IObject from "@/objects/IObject";
import {KeyEvent, KeyPressManager} from "@/managers/KeyPressManager";
import Debug from "@/managers/Debug";
import Scoreboard from "@/game/Scoreboard";
import {BoxGeometry} from "three";
import SoundPlayer, {GameSound} from "@/game/SoundPlayer";

export default class Game {

    private players: Player[] = []

    private ball: Sphere

    private screen: Screen

    private plane: Cube

    private borders: Borders = Borders.getInstance()

    constructor() {
        this.screen = new Screen()
        Debug.getInstance().debug('Game', {
            status: this.screen.isPlaying() ? 'running' : 'paused'
        })

        KeyPressManager.getInstance().addListener("p", KeyEvent.DOWN, () => {
            // Check if there is debug for pause, if not create it, if yes, delete it

            const playing = this.screen.isPlaying()
            this.screen.setPlay(!playing)
            Debug.getInstance().debug('Game', {
                status: playing ? 'paused' : 'running'
            })
        })

        //Make resert listener
        KeyPressManager.getInstance().addListener("r", KeyEvent.DOWN, () => {
            this.reset()
        })

        this.setupBorders()
        this.setupPlayers()
        this.setupBall()
        this.setupCollisions()
        Scoreboard.setup({left: this.players[0], right: this.players[1]})
    }

    setupPlayers() {


        const controls = [
            {
                up: "w",
                down: "s",
                voteForPause: "q"
            },
            {
                up: "ArrowUp",
                down: "ArrowDown",
                voteForPause: "m"
            }
        ]
        const distance = 2
        const coords = [
            {
                x: -this.borders.width / 2 + distance,
                y: 0
            },
            {
                x: this.borders.width / 2 - distance,
                y: 0
            }
        ]
        const colors = ["blue", "red"]

        for (let i = 0; i < 2; i++) {
            // Create cube

            const cube = new Cube({
                width: 1,
                height: 3
            }, colors[i])

            cube.setBorders(this.borders)

            const player = new Player(cube, controls[i], `Player${i+1}`)
            player.setSpeed(.5)
            const coord = coords[i]

            cube.setPosition({
                x: coord.x,
                y: 0,
                z: 0
            })

            player.observe(PlayerEvent.VOTE_FOR_PAUSE, (data: any) => {
                console.log(data)
            })

            // Add player to players
            this.screen.addUpdatableObject(cube)
            this.players.push(player)
        }
    }

    private score(data: any) {
        SoundPlayer.getInstance().play(GameSound.SCORE)
        const result = data as {side: string}
        this.ball.setPosition({
            x: 0,
            y: 0,
            z: 0
        })
        this.screen.setPlay(false)
        if (result.side === "left") {
            this.players[1].addPoint()
        } else {
            this.players[0].addPoint()
        }

    }

    private setupBall() {
        this.ball = new Sphere("white")
        this.ball.observe("collision", this.score.bind(this))

        this.ball.setVelocity({
            x: -.3,
            y: .3,
            z: 0
        })
        this.screen.addUpdatableObject(this.ball)
    }

    private setupBorders() {
        const helper = this.borders.getObject()
        this.screen.getScene().add(helper)
    }

    private setupCollisions() {
        const collision = Collision.getInstance()
        collision.clear()

        for (const player of this.players) {
            collision.addPair(player.getName(), player.getObject(), this.ball, (cube: IObject, ball: IObject) => {
                const sphere = ball as Sphere
                const cube1 = cube as Cube
                const cubeGeometry = cube.getObject().geometry as BoxGeometry

                let speed = sphere.getPaddleTouchSpeed(cube1)

                const spVel = sphere.getVelocity()
                const spPos = sphere.getPosition()

                const dir = spVel.x > 0 ? 1 : -1

                spVel.x = -speed * spVel.x
                spPos.x = cube.getPosition().x + (-dir)*(cubeGeometry.parameters.width/2 + 1)
                SoundPlayer.getInstance().play(GameSound.BOUNCE1)
            })
        }


    }

    public runScreen() {
        this.screen.animate()
    }

    public reset() {
        this.screen.getScene().clear()
        this.players = []
        this.setupPlayers()
        this.setupBall()
        this.setupBorders()
        this.setupCollisions()
    }


}