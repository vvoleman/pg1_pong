import AbstractColorObject from "@/objects/AbstractColorObject";
import {Mesh, SphereGeometry} from "three";
import Borders, {Sides} from "@/game/Borders";

export default class Sphere extends AbstractColorObject {
    protected setupObject(): Mesh {
        const geometry = new SphereGeometry(1, 32, 32);
        const material = this.material
        return new Mesh(geometry, material)
    }
    update(): void {
        const touched = Borders.getInstance().getTouchedBorder(this)

        const vel = this.getVelocity()
        if (touched) {
            if (touched == Sides.TOP || touched == Sides.BOTTOM) {
                const vel = this.getVelocity()
                vel.y = -vel.y
            } else if (touched == Sides.LEFT || touched == Sides.RIGHT) {
                this.notify('collision', {side: touched})
                const vel = this.getVelocity()
                vel.x = -vel.x
            }
        }

        const pos = this.getPosition()
        const newPos = {
            x: pos.x + vel.x,
            y: pos.y + vel.y,
            z: pos.z + vel.z
        }

        this.setPosition(newPos)
        this.object.position.set(newPos.x, newPos.y, newPos.z)
    }
}