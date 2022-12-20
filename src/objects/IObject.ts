import {Mesh} from "three";
import PositionVector from "@/containers/PositionVector";
import VelocityVector from "@/containers/VelocityVector";

export default interface IObject {

    getObject(): Mesh

    getPosition(): PositionVector

    getVelocity(): VelocityVector

    setPosition(position: PositionVector): IObject

    setVelocity(velocity: VelocityVector): IObject

    update(): void

}