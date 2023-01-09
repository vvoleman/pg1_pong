import AbstractColorObject from "@/objects/AbstractColorObject";
import {BoxGeometry, Mesh, SphereGeometry, Sphere as SphereTree} from "three";
import Borders, {Sides} from "@/game/Borders";
import Cube from "@/objects/Cube";
import PositionVector from "@/containers/PositionVector";
import AbstractObject from "@/objects/AbstractObject";

export default class Sphere extends AbstractColorObject {

    //private radius: number = 150

    public getRadius(): number {
        return 1
    }

    public setRadius(radius: number): Sphere {
        this.object.geometry = new SphereGeometry(radius, 32, 32)
        return this
    }

    public getPaddleTouchSpeed(cube: Cube): number {
        const cubeGeometry = cube.getObject().geometry as BoxGeometry
        const cubePos = cube.getPosition()
        const realDistance = this.getDistanceTo(cube)

        const minDistance = this.getRadius() + cubeGeometry.parameters.width / 2
        const adjustedDistance = new PositionVector(
            cubePos.x + cubeGeometry.parameters.width / 2,
            cubePos.y + cubeGeometry.parameters.height / 2,
            cubePos.z
        )

        const maxDistance = this.getRadius() + AbstractObject.getDistanceBetweenPos(cubePos, adjustedDistance)

        const distance = Math.min(Math.max(realDistance, minDistance), maxDistance)


        const maxSpeed = 1.5
        const minSpeed = 0.9
        return Math.round(((distance - minDistance) / (maxDistance - minDistance) * (maxSpeed - minSpeed) + minSpeed) * 100) / 100
    }

    getSphereObject(): SphereTree {
        return new SphereTree(this.getPosition(), this.getRadius())
    }

    protected setupObject(): Mesh {
        const geometry = new SphereGeometry(this.getRadius(), 32, 32);
        const material = this.material
        return new Mesh(geometry, material)
    }

    update(): void {
        // Get position one frame ahead
        const touched = Borders.getInstance().getTouchedSide(this)

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

        const newPos = new PositionVector(pos.x + vel.x,
            pos.y + vel.y,
            pos.z + vel.z)


        // Calculate slope between current and next position
        // Debug.getInstance().debug('Slope', {
        //     slopeReal: slope,
        //     slopeCalculated: vel.y / vel.x,
        // })

        this.setPosition(newPos)
        this.object.position.set(newPos.x, newPos.y, newPos.z)
    }
}