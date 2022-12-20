import AbstractColorObject from "@/objects/AbstractColorObject";
import {BoxGeometry, Mesh, SphereGeometry} from "three";
import Borders, {Sides} from "@/game/Borders";
import Cube from "@/objects/Cube";
import Debug from "@/managers/Debug";

export default class Sphere extends AbstractColorObject {

    private radius: number = 1

    public getRadius(): number {
        return this.radius
    }

    public setRadius(radius: number): Sphere {
        this.radius = radius
        this.object.geometry = new SphereGeometry(radius, 32, 32)
        return this
    }

    public getPaddleTouchSpeed(cube: Cube): number {
        const cubeGeometry = cube.getObject().geometry as BoxGeometry
        const cubePos = cube.getPosition()
        const realDistance = this.getDistanceTo(cube)

        const minDistance = this.getRadius() + cubeGeometry.parameters.width / 2
        const maxDistance = this.getRadius() + this.getDistanceBetweenPos(cubePos, {
            x: cubePos.x + cubeGeometry.parameters.width / 2,
            y: cubePos.y + cubeGeometry.parameters.height / 2,
            z: cubePos.z
        })

        const distance = Math.min(Math.max(realDistance, minDistance), maxDistance)


        const maxSpeed = 1.5
        const minSpeed = 0.9
        return (distance - minDistance) / (maxDistance - minDistance) * (maxSpeed - minSpeed) + minSpeed
    }

    protected setupObject(): Mesh {
        const geometry = new SphereGeometry(1, 32, 32);
        const material = this.material
        return new Mesh(geometry, material)
    }

    update(): void {
        Debug.getInstance().debug("Sphere", {
            speedX: this.getVelocity().x,
            speedY: this.getVelocity().y
        })

        const touched = Borders.getInstance().getTouchedBorderBall(this)

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