import AbstractColorObject from "@/objects/base/AbstractColorObject";
import {BoxGeometry, Mesh, SphereGeometry} from "three";
import Borders, {Sides} from "@/game/Borders";
import Cube from "@/objects/Cube";
import PositionVector from "@/containers/PositionVector";
import AbstractObject from "@/objects/base/AbstractObject";

export default class Sphere extends AbstractColorObject {

    //private radius: number = 150
    private borders: Borders = Borders.getInstance()
    private _dummy!: Sphere

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


        const maxSpeed = 1.3
        const minSpeed = 0.9
        return Math.round(((distance - minDistance) / (maxDistance - minDistance) * (maxSpeed - minSpeed) + minSpeed) * 100) / 100
    }

    protected setupObject(): Mesh {
        const geometry = new SphereGeometry(this.getRadius(), 32, 32);
        const material = this.material
        const obj = new Mesh(geometry, material);
        obj.name = 'sphere'
        return obj
    }

    public bounceY(): void {
        const vel = this.getVelocity()
        vel.y = -vel.y
    }

    public bounceX(): void {
        const vel = this.getVelocity()
        vel.x = -vel.x
    }

    protected reset(): void {
        this.setPosition(new PositionVector(0, 0, 0))
        this.setVelocity(new PositionVector(-.1, .3, 0))
    }

    update(): void {
        const pos = this.getPosition()
        const vel = this.getVelocity()

        const newPos = new PositionVector(pos.x + vel.x,
            pos.y + vel.y,
            pos.z + vel.z)

        const future = this.getDummy().setPosition(newPos.clone())

        // Get position one frame ahead
        const touched = this.borders.getTouchedSide(future)

        if (touched) {
            this.notify('collision', {side: touched})
            if (touched == Sides.TOP || touched == Sides.BOTTOM) {
                this.bounceY()
            } else if (touched == Sides.LEFT || touched == Sides.RIGHT) {
                this.bounceX()
            }
        } else {
            this.setPosition(newPos)
            this.object.position.set(newPos.x, newPos.y, newPos.z)
        }
    }

    public getDummy(): Sphere {
        if (!this._dummy) {
            this._dummy = new Sphere('black')
        }
        return this._dummy
    }
}
