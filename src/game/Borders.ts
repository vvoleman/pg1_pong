import Sphere from "@/objects/Sphere";
import IObject from "@/objects/IObject";
import {BoxGeometry, BoxHelper, Mesh, MeshBasicMaterial, Object3D} from "three";
import Debug from "@/managers/Debug";
import {KeyEvent, KeyPressManager} from "@/managers/KeyPressManager";

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

    public getObject(): BoxHelper {
        const box = new BoxGeometry(this.width, this.height, 1)
        return new BoxHelper(new Mesh(box, new MeshBasicMaterial({color: "red"})))
    }

    public getTouchedBorderBall(obj: Sphere): Sides | null {
        const pos = obj.getPosition()
        const radius = obj.getRadius()

        // center of the circle
        const m = pos.x
        const n = pos.y

        //formula for (x-m)^2 + (y-n)^2 - r^2
        const fn = (x: number, y: number) => {
            return (x-m)**2 + (y-n)**2 - radius**2
        }

        const left = fn(-this.width/2, n)
        const right = fn(this.width/2, n)
        const top = fn(m, this.height/2)
        const bottom = fn(m, -this.height/2)

        // Debug.getInstance().debug('Borders', {
        //     radius: radius,
        //     m: m,
        //     n: n,
        //     left: left,
        //     right: right,
        //     top: top,
        //     bottom: bottom
        // })

        if (left <= 0) {
            return Sides.LEFT
        } else if (right <= 0) {
            return Sides.RIGHT
        } else if (bottom <= 0) {
            return Sides.BOTTOM
        } else if (top <= 0) {
            return Sides.TOP
        }

        return null
    }

    public getTouchedBorder(obj: IObject): Sides | null {
        const pos = obj.getPosition()
        const vel = obj.getVelocity()
        const geometry = obj.getObject().geometry as BoxGeometry

        const width = geometry.parameters.width
        const height = geometry.parameters.height

        const x = pos.x + width/2
        const y = pos.y + height/2


        if (x + vel.x < -this.width / 2) {
            return Sides.LEFT
        } else if (x + width + vel.x > this.width / 2) {
            return Sides.RIGHT
        } else if (y - height + vel.y < -this.height / 2) {
            return Sides.BOTTOM
        } else if (y + vel.y > this.height / 2) {
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