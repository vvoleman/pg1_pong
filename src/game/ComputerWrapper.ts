import Player from "@/game/Player";
import IUpdatable from "@/objects/base/IUpdatable";
import Sphere from "@/objects/Sphere";
import BallMovementManager, {MovementEvent} from "@/managers/BallMovementManager";
import {BoxGeometry, Clock} from "three";
import PositionVector from "@/containers/PositionVector";
import ClockManager from "@/managers/ClockManager";

export enum Difficulty {
    EASY = 2,
    MEDIUM = 3,
    HARD = 100,
}

export default class ComputerWrapper implements IUpdatable {

    private _player: Player;
    private _movement: BallMovementManager;
    private _ball: Sphere;
    private running: boolean = false;
    private readonly _difficulty: Difficulty;

    private _requiredY: number | null = null;
    private _lastMovedAt: number | null = null;
    private _clock: Clock = ClockManager.getClock()

    constructor(player: Player, ball: Sphere, movement: BallMovementManager, difficulty: Difficulty = Difficulty.HARD) {
        this._movement = movement;
        this._player = player;
        this._ball = ball
        this._difficulty = difficulty;

        movement.observe(MovementEvent.PLAYER_COLLISION, (player: Player) => {
            if (player.getSide() !== this._player.getSide()) return

            this._requiredY = null
        })
    }

    public setRunning(running: boolean): ComputerWrapper {
        this.running = running
        return this
    }

    public isRunning(): boolean {
        return this.running;
    }

    update(): void {
        if (!this.running) return

        if (!this.isMyDifficulty()) return

        if (this._requiredY !== null) {
            this.moveToY(this._requiredY)
        }

        const now = this._clock.getElapsedTime()
        if (this._lastMovedAt !== null && now - this._lastMovedAt < 0.3) return

        this._lastMovedAt = now
        this._requiredY =  this.isMyDirection() ? this.getRequiredY() : -this._ball.getPosition().y
    }

    private isMyDirection(): boolean {
        const playerDirection = this._player.getSide() === 'left' ? -1 : 1
        const ballDirection = Math.sign(this._ball.getVelocity().x)

        return playerDirection === ballDirection
    }

    private moveToY(requiredY: number): void {
        // We are at the location
        const posY = -this.getPlayerPosition().y
        if (this.isPrepared(posY, requiredY)) {
            this.getPlayerVelocity().y = 0
            return
        }

        const direction = -Math.sign(requiredY - posY)

        const velY = this.getPlayerVelocity().y

        if (direction === Math.sign(velY)) return

        if (posY > requiredY) {
            this._player.moveUp()
        } else {
            this._player.moveDown()
        }
    }

    private isPrepared(posY: number, requiredY: number): boolean {
        const offset = this._player.getSpeed()

        // Is requiredY between posY +- offset?
        return posY + offset >= requiredY && posY - offset <= requiredY
    }

    private isMyDifficulty(): boolean {
        const distance = this._movement.getPath().length

        return distance <= this._difficulty
    }

    private getRequiredY(): number {
        const path = this._movement.getPath()
        const endPosition = path[path.length - 1]
        if (!endPosition) return Math.floor(Math.random()*48 - 24)

        const geometry = this._player.getObject().getObject().geometry as BoxGeometry
        const playerHeight = geometry.parameters.height
        const playerPosition = this._player.getObject().getPosition()
        const endY = -endPosition.y

        if (endY > playerPosition.y) {
            return endY - playerHeight / 2
        }

        return endY + playerHeight / 2
    }

    private getPlayerPosition(): PositionVector {
        return this._player.getObject().getPosition()
    }

    private getPlayerVelocity(): PositionVector {
        return this._player.getObject().getVelocity()
    }

}
