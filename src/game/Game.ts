import Player, {PlayerEvent} from "@/game/Player";
import Cube from "@/objects/Cube";
import Screen from "@/game/Screen";
import Plane from "@/objects/Plane";
import {BoxGeometry, BoxHelper, Mesh, MeshBasicMaterial} from "three";
import Sphere from "@/objects/Sphere";
import Borders from "@/game/Borders";

export default class Game {

    private players: Player[] = []

    private screen: Screen

    private plane: Cube

    constructor() {
        this.screen = new Screen()

        const ball = new Sphere("white")
        ball.observe("collision", (data: any) => {
            console.log(data)
        })
        ball.setVelocity({
            x: 3,
            y: 0.1,
            z: 0
        })
        this.screen.addUpdatableObject(ball)

        //boxhelper
        let border = Borders.getInstance()
        const box = new BoxGeometry(border.width, border.height, 10)
        const boxhelper = new BoxHelper(new Mesh(box, new MeshBasicMaterial({color: "red"})))
        this.screen.getScene().add(boxhelper)

        this.setupPlayers()
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

        const colors = ["blue", "red"]

        for (let i = 0; i < 2; i++) {
            // Create cube

            const cube = new Cube({
                width: 1,
                height: 3
            }, colors[i])

            const player = new Player(cube, controls[i], `$Player{i+1}`)

            player.observe(PlayerEvent.VOTE_FOR_PAUSE, (data: any) => {
                console.log(data)
            })

            // Add player to players
            this.screen.addUpdatableObject(cube)
            this.players.push(player)
        }
    }

    public runScreen() {
        this.screen.animate()
    }


}