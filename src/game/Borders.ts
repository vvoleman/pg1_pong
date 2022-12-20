import Sphere from "@/objects/Sphere";
import Cube from "@/objects/Cube";
import IObject from "@/objects/IObject";

export enum Sides {
    LEFT = 'left',
    RIGHT = 'right',
    TOP = 'top',
    BOTTOM = 'bottom'
}

export default class Borders {

    private static _instance: Borders

    public width: number = 55
    public height: number = 25

    private constructor() {
    }

    public getTouchedBorderBall(obj: Sphere): Sides | null {
        const pos = obj.getPosition()
        const vel = obj.getVelocity()

        if (pos.x + vel.x < -this.width / 2) {
            return Sides.LEFT
        } else if (pos.x + vel.x > this.width / 2) {
            return Sides.RIGHT
        } else if (pos.y + vel.y < -this.height / 2) {
            return Sides.BOTTOM
        } else if (pos.y + vel.y > this.height / 2) {
            return Sides.TOP
        }

        return null
    }

    public getTouchedBorder(obj: IObject): Sides | null {
        const pos = obj.getPosition()
        const vel = obj.getVelocity()

        if (pos.x + vel.x < -this.width / 2) {
            return Sides.LEFT
        } else if (pos.x + vel.x > this.width / 2) {
            return Sides.RIGHT
        } else if (pos.y + vel.y < -this.height / 2) {
            return Sides.BOTTOM
        } else if (pos.y + vel.y > this.height / 2) {
            return Sides.TOP
        }

        return null
    }

    public static getInstance(): Borders {
        if (this._instance === undefined) {
            this._instance = new Borders()
        }
        return this._instance
    }

}