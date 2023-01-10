import IObject from "@/objects/base/IObject";
import {Box3, BoxGeometry, BoxHelper, Mesh, MeshBasicMaterial,} from "three";
import AbstractObject from "@/objects/base/AbstractObject";
import PositionVector from "@/containers/PositionVector";

export enum Sides {
    LEFT = 'left',
    RIGHT = 'right',
    TOP = 'top',
    BOTTOM = 'bottom'
}

export default class Borders {

    private static _instance: Borders

    public width: number = 50
    public height: number = 20
    private depth: number = 1

    private constructor() {
    }

    public setDept(depth: number) {
        this.depth = depth
    }

    public getObject(): BoxHelper {
        const box = new BoxGeometry(this.width, this.height, this.depth)
        return new BoxHelper(new Mesh(box, new MeshBasicMaterial({color: "red"})))
    }

    public getTouchedSide(obj: IObject): Sides | null {
        const borderBox = new Box3().setFromObject(this.getObject())
        const objBox = new Box3().setFromObject(obj.getObject())
        const isInside = borderBox.containsBox(objBox)

        // All points of sphere in box
        if (isInside) {
            return null
        }

        const spherePos = obj.getPosition()

        return Borders.getClosesBorder(spherePos)
    }

    public static getSidePosition(side: Sides, pos: PositionVector): PositionVector {
        const instance = Borders.getInstance()
        switch (side) {
            case Sides.LEFT:
                return new PositionVector(-instance.width / 2, pos.y, 0)
            case Sides.RIGHT:
                return new PositionVector(instance.width / 2, pos.y, 0)
            case Sides.TOP:
                return new PositionVector(pos.x, instance.height / 2, 0)
            case Sides.BOTTOM:
                return new PositionVector(pos.x, -instance.height / 2, 0)
        }
    }

    public static getClosesBorder(pos: PositionVector): Sides {
        const left = AbstractObject.getDistanceBetweenPos(pos, this.getSidePosition(Sides.LEFT, pos))
        const right = AbstractObject.getDistanceBetweenPos(pos, this.getSidePosition(Sides.RIGHT, pos))
        const top = AbstractObject.getDistanceBetweenPos(pos, this.getSidePosition(Sides.TOP, pos))
        const bottom = AbstractObject.getDistanceBetweenPos(pos, this.getSidePosition(Sides.BOTTOM, pos))

        const sides = {
            [left]: Sides.LEFT,
            [right]: Sides.RIGHT,
            [top]: Sides.TOP,
            [bottom]: Sides.BOTTOM
        }

        const min = Math.min(left, right, top, bottom)

        return sides[min]
    }

    public static getInstance(): Borders {
        if (this._instance === undefined) {
            this._instance = new Borders()
        }
        return this._instance
    }

}