import {BoxGeometry, Mesh} from "three";
import AbstractColorObject from "@/objects/AbstractColorObject";
import Borders, {Sides} from "@/game/Borders";

export interface Size {
    width: number,
    height: number,
}

export default class Cube extends AbstractColorObject{

    private borders: Borders|null = null

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

    update(): void {

        const pos = this.getPosition()
        const vel = this.getVelocity()

        this.setVelocity(vel)

        const newPos = {
            x: pos.x + vel.x,
            y: pos.y + vel.y,
            z: pos.z + vel.z
        }

        const objWidth = (this.object.geometry as BoxGeometry).parameters.width
        const objHeight = (this.object.geometry as BoxGeometry).parameters.height

        // Does the object touch the borders?
        if (this.borders !== null) {
            const touchedBorder = this.borders.getTouchedBorder(this)
            if (touchedBorder !== null) {
                console.log(touchedBorder)
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
                        newPos.y = -this.borders.height / 2 + objHeight /2
                        break
                }
            }
        }

        this.setPosition(newPos)

        this.object.position.set(newPos.x, newPos.y, newPos.z)
    }



}