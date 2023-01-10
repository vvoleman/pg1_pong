import Player from "@/game/Player";
import Sphere from "@/objects/Sphere";
import Collision from "@/managers/Collision";
import Observable from "@/objects/base/Observable";
import {BoxGeometry, Vector3} from "three";
import Borders, {Sides} from "@/game/Borders";
import PositionVector from "@/containers/PositionVector";
import {BallEvent} from "@/game/Game";

export enum MovementEvent {
    PLAYER_COLLISION = "player-collision",
    NEW_SLOPE = "new-slope",
}

export default class BallMovementManager extends Observable {

    private players: Player[] = []
    private readonly ball: Sphere
    private path: Vector3[] = []
    private borders: Borders;

    constructor(players: Player[], ball: Sphere) {
        super();
        this.players = players
        this.ball = ball
        this.borders = Borders.getInstance()
        this.setupPlayerListeners()
    }

    protected setupPlayerListeners() {
        // Setup collision listeners
        this.players.forEach((player) => {
            Collision.getInstance().addPair(`${player.getSide().toString()}-ball`, player.getObject(), this.ball, () => {
                this.handlePlayerCollision(player)
            })
        })

        // Setup ball hitting top or bottom for removing passed path
        this.ball.observe(BallEvent.COLLISION, (data: {side: Sides}) => {
            const side = data.side
            if (side === Sides.LEFT || side === Sides.RIGHT) {
                return
            }
            if (this.path.length === 0) return

            // Remove first item of this.path
            this.path.shift()
        })
    }

    protected handlePlayerCollision(player: Player) {
        this.notify(MovementEvent.PLAYER_COLLISION, player)
        const cube = player.getObject()
        const cubeGeometry = cube.getObject().geometry as BoxGeometry

        let speed = this.ball.getPaddleTouchSpeed(cube)

        const ballVelocity = this.ball.getVelocity()
        const ballPosition = this.ball.getPosition()

        const dir = ballVelocity.x > 0 ? 1 : -1
        ballVelocity.x = -speed * ballVelocity.x
        ballPosition.x = cube.getPosition().x + (-dir) * (cubeGeometry.parameters.width / 2 + 1)

        this.refreshPath()
    }

    public refreshPath(): void {
        this.path = this.calculatePath()
    }

    private calculatePath(): Array<Vector3> {
        const start = this.ball.getPosition()
        const velocity = this.ball.getVelocity().clone()

        const height = this.borders.height
        const testBall = new Sphere('black')
        const r = this.ball.getRadius()
        let touchedSide: Sides | null = null;
        let currentPos = new PositionVector(start.x, start.y, start.z)
        const path: Array<Vector3> = [start]
        while (touchedSide !== Sides.LEFT && touchedSide !== Sides.RIGHT && path.length < 50) {
            const sign = Math.sign(velocity.x)
            let k = sign * velocity.y / velocity.x

            let y = currentPos.y

            const kDir = Math.sign(k)
            let b = kDir * height / 2 + -kDir * r
            let a = currentPos.x + sign * (b - y) / k


            const newPos = new Vector3(a, b, 0)
            // this.ball.setPosition(newPos)
            testBall.setPosition(newPos).setVelocity(velocity)

            const endPoint = this.isEndPosition(newPos, r, k, sign)
            if (endPoint !== null) {
                path.push(endPoint)
                return path
            }

            currentPos.set(a, b, 0)

            path.push(newPos)

            velocity.y = -velocity.y
            touchedSide = this.borders.getTouchedSide(testBall)
        }
        return path
    }

    public getPath(): Array<Vector3> {
        return this.path
    }

    private isEndPosition(position: Vector3, r: number, k: number, sign: number): Vector3 | null {
        const half = this.borders.width / 2
        const left = -half + r
        const right = half - r

        const touchedLeft = position.x <= left
        const touchedRight = position.x >= right

        if (!touchedLeft && !touchedRight) {
            return null
        }

        const sideX = touchedLeft ? left : right
        const sideY = position.y + (k / sign) * (sideX - position.x)

        return new Vector3(sideX, sideY, 0)
    }

}