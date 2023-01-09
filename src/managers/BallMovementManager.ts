import Player from "@/game/Player";
import Sphere from "@/objects/Sphere";
import Collision from "@/managers/Collision";
import Observable from "@/objects/Observable";
import {BoxGeometry, Vector3} from "three";
import Borders, {Sides} from "@/game/Borders";
import PositionVector from "@/containers/PositionVector";
import DependencyContainer from "@/managers/DependencyContainer";
import Debug from "@/managers/Debug";
import Game from "@/game/Game";

export default class BallMovementManager extends Observable{

    private players: Player[] = []
    private readonly ball: Sphere
    private path: Vector3[] = []
    private borders: Borders;

    constructor(players: Player[], ball: Sphere) {
        super();
        this.players = players
        this.ball = ball
        this.borders = DependencyContainer.getInstance().get(Borders);
        this.setupPlayerListeners()
    }

    protected setupPlayerListeners() {
        // Setup collision listeners
        this.players.forEach((player) => {
            Collision.getInstance().addPair(`${player.getSide().toString()}-ball`, player.getObject(), this.ball, () => {
                this.handlePlayerCollision(player)
            })
        })
    }

    protected handlePlayerCollision(player: Player) {
        this.notify('player-collision', player)

        const cube = player.getObject()
        const cubeGeometry = cube.getObject().geometry as BoxGeometry

        let speed = this.ball.getPaddleTouchSpeed(cube)

        const ballVelocity = this.ball.getVelocity()
        const ballPosition = this.ball.getPosition()

        const dir = ballVelocity.x > 0 ? 1 : -1
        ballVelocity.x = -speed * ballVelocity.x
        ballPosition.x = cube.getPosition().x + (-dir) * (cubeGeometry.parameters.width / 2 + 1)

        this.path = this.calculatePath()
        this.notify('new-slope', {velocity: this.ball.getVelocity().clone(), position: ballPosition.clone()})
    }

    private calculatePath(): Array<Vector3> {
        const start = this.ball.getPosition()
        const velocity = this.ball.getVelocity().clone()

        const height = this.borders.height
        const testBall = new Sphere('black')
        const r = this.ball.getRadius()
        let touchedSide: Sides|null = null;
        let currentPos = new PositionVector(start.x, start.y, start.z)
        const path: Array<Vector3> = [start]

        while (touchedSide !== Sides.LEFT && touchedSide !== Sides.RIGHT) {
            const sign = Math.sign(-currentPos.x)
            let k = sign*velocity.y / velocity.x

            const alfa = Math.atan(k)
            const relY = r*Math.sin(alfa)
            const relX = r*Math.cos(alfa)

            let y = currentPos.y

            let b = Math.sign(k) * height / 2
            let a = currentPos.x + sign*(b-y)/k
            console.log(a,b,relX,relY)

            currentPos.set(a+-sign*relX, b+-sign*relY, 0)

            const newPos = new Vector3(a, b, 0)
            // this.ball.setPosition(newPos)

            testBall.setPosition(newPos).setVelocity(velocity)
            path.push(newPos)

            velocity.y = -velocity.y
            touchedSide = this.borders.getTouchedSide(testBall)

            if (path.length > 50) {
                console.log(path)
                return path
            }
        }

        return path
    }

    public getPath(): Array<Vector3> {
        return this.path
    }

}