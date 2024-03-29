import IObject from "@/objects/base/IObject";
import {Mesh, MeshBasicMaterial} from "three";
import VelocityVector from "@/containers/VelocityVector";
import PositionVector from "@/containers/PositionVector";
import Observable from "@/objects/base/Observable";

export default abstract class AbstractObject extends Observable implements IObject {

    protected object: Mesh;
    protected material: MeshBasicMaterial
    protected velocity: VelocityVector = new VelocityVector(0, 0, 0)

    protected position: PositionVector = new PositionVector(0, 0, 0)

    protected constructor(material: MeshBasicMaterial) {
        super();
        this.material = material
        this.object = this.setupObject();
    }

    getObject(): Mesh {
        return this.object;
    }

    getVelocity(): VelocityVector {
        return this.velocity
    }

    getPosition(): PositionVector {
        return this.position
    }

    setVelocity(velocity: VelocityVector): IObject {
        this.velocity = velocity
        return this
    }

    setPosition(position: PositionVector): IObject {
        this.position = position
        this.object.position.set(position.x, position.y, position.z)
        return this
    }

    protected abstract setupObject(): Mesh;

    setMaterial(material: MeshBasicMaterial): AbstractObject {
        this.object.material = material
        return this
    }

    abstract update(): void

    public static getMovementUnit(): number {
        return 1
    }

    protected getDistanceTo(other: IObject): number {
        const pos = this.getPosition()
        const otherPos = other.getPosition()
        return AbstractObject.getDistanceBetweenPos(pos, otherPos)
    }

    public static getDistanceBetweenPos(pos1: PositionVector, pos2: PositionVector): number {
        return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2))
    }

}

