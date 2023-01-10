import Observable from "@/objects/base/Observable";
import Cube from "@/objects/Cube";

export enum PlayerControl {
    UP = "up",
    DOWN = "down",
}

export enum PlayerEvent {
    VOTE_FOR_PAUSE = "voteForPause",
}

export enum PlayerSide {
    LEFT = "left",
    RIGHT = "right",
}

export type ControlSettings = {
    [key in PlayerControl]: string;
};

export default class Player extends Observable {

    private readonly object: Cube

    private score: number

    private speed: number

    private readonly side: PlayerSide

    constructor(object: Cube, side: PlayerSide) {
        super()

        this.score = 0
        this.object = object
        this.side = side
        this.speed = 0.1
    }

    public setSpeed(speed: number): void {
        this.speed = speed
    }

    public getSpeed(): number {
        return this.speed
    }

    public addPoint(): void {
        this.score++
    }

    public setScore(score: number): void {
        this.score = score
    }

    public getScore(): number {
        return this.score
    }

    public getSide(): PlayerSide {
        return this.side
    }

    public getObject(): Cube {
        return this.object
    }

    public moveUp(start: boolean = true): void {
        const velocity = this.object.getVelocity()
        velocity.y = start ? this.speed : 0
    }

    public moveDown(start: boolean = true): void {
        const velocity = this.object.getVelocity()
        velocity.y = start ? -this.speed : 0
    }

}