import IObject from "@/objects/IObject";
import Observable from "@/objects/Observable";
import {KeyEvent, KeyPressManager} from "@/managers/KeyPressManager";

export enum PlayerControl {
    UP = "up",
    DOWN = "down",
    VOTE_FOR_PAUSE = "voteForPause",
}

export enum PlayerEvent {
    VOTE_FOR_PAUSE = "voteForPause",
}

export type ControlSettings = {
    [key in PlayerControl]: string;
};

export default class Player extends Observable {

    private object: IObject

    private controls: ControlSettings

    private score: number

    private name: string

    private isPaused: boolean

    private speed: number

    constructor(object: IObject, controls: ControlSettings, name: string) {
        super()

        this.score = 0
        this.isPaused = false

        this.controls = controls
        this.object = object
        this.name = name
        this.speed = 0.1

        this.setupControls()
        console.log(this.controls)
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

    public getName(): string {
        return this.name
    }

    public getObject(): IObject {
        return this.object
    }


    private setupControls()
        :
        void {
        let manager = KeyPressManager.getInstance()

        // Up
        manager.addListener(this.controls[PlayerControl.UP], KeyEvent.DOWN, () => {
            const velocity = this.object.getVelocity()
            velocity.y = this.speed
        })

        manager.addListener(this.controls[PlayerControl.UP], KeyEvent.UP, () => {
            const velocity = this.object.getVelocity()
            velocity.y = 0
        })

        // Down
        manager.addListener(this.controls[PlayerControl.DOWN], KeyEvent.DOWN, () => {
            const velocity = this.object.getVelocity()
            velocity.y = -this.speed
        })

        manager.addListener(this.controls[PlayerControl.DOWN], KeyEvent.UP, () => {
            const velocity = this.object.getVelocity()
            velocity.y = 0
        })

        // Vote for pause
        manager.addListener(this.controls[PlayerControl.VOTE_FOR_PAUSE], KeyEvent.DOWN, () => {
            this.isPaused = !this.isPaused
            this.notify(PlayerEvent.VOTE_FOR_PAUSE, {player: this})
        })
    }


}