import {BoxGeometry, Mesh} from "three";
import AbstractColorObject from "@/objects/AbstractColorObject";

export interface Size {
    width: number,
    height: number,
}

export default class Cube extends AbstractColorObject{

    constructor(size: Size, color: string) {
        super(color);
        this.setSize(size)
    }

    protected setupObject(): Mesh {
        const geometry = new BoxGeometry(1, 1, 1);
        const material = this.material
        return new Mesh(geometry, material)
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
        this.setPosition(newPos)

        this.object.position.set(newPos.x, newPos.y, newPos.z)
    }



}