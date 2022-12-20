import AbstractColorObject from "@/objects/AbstractColorObject";
import {BoxGeometry, Mesh} from "three";

export default class Plane extends AbstractColorObject {

    protected setupObject(): Mesh {
        const geometry = new BoxGeometry(1, 1, 1);
        const material = this.material
        return new Mesh(geometry, material)
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