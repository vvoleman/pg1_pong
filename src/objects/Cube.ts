import {BoxGeometry, Mesh} from "three";
import AbstractColorObject from "@/objects/base/AbstractColorObject";
import Borders, {Sides} from "@/game/Borders";
import PositionVector from "@/containers/PositionVector";

export interface Size {
    width: number,
    height: number,
}

export default class Cube extends AbstractColorObject {

    private borders!: Borders

    private _dummy!: Cube

    constructor(size: Size, color: string) {
        super(color);
        this.setSize(size)
    }

    protected setupObject(): Mesh {
        const geometry = new BoxGeometry(1, 1, 1);
        const material = this.material
        return new Mesh(geometry, material)
    }

    public setBorders(borders: Borders): Cube {
        this.borders = borders
        return this
    }

    public setSize(size: Size): Cube {
        this.object.geometry = new BoxGeometry(size.width, size.height, 1)
        return this
    }

    public getSize(): Size {
        const width = (this.object.geometry as BoxGeometry).parameters.width
        const height = (this.object.geometry as BoxGeometry).parameters.height
        return {width, height}
    }

    private getDummy(): Cube {
        if (this._dummy === undefined) {
            this._dummy = new Cube({width: 1, height: 1}, this.color)
        }
        return this._dummy
    }

    update(): void {

        const pos = this.getPosition()
        const vel = this.getVelocity()

        const newPos = new PositionVector(pos.x + vel.x, pos.y + vel.y, pos.z + vel.z)

        const dummy = this.getDummy()
        dummy.setSize(this.getSize())

        const objWidth = dummy.getSize().width
        const objHeight = dummy.getSize().height

        dummy.setPosition(newPos)

        // Does the object touch the borders?
        const touchedBorder = this.borders.getTouchedSide(dummy)
        if (touchedBorder !== null) {
            switch (touchedBorder) {
                case Sides.LEFT:
                    newPos.x = -this.borders.width / 2 + objWidth / 2
                    break
                case Sides.RIGHT:
                    newPos.x = this.borders.width / 2 - objWidth / 2
                    break
                case Sides.TOP:
                    newPos.y = this.borders.height / 2 - objHeight / 2
                    break
                case Sides.BOTTOM:
                    newPos.y = -this.borders.height / 2 + objHeight / 2
                    break
            }
        } else {
            this.setPosition(newPos)
            this.object.position.set(newPos.x, newPos.y, newPos.z)
        }


    }

}
