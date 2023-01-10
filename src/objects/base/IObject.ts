import {Mesh} from "three";
import PositionVector from "@/containers/PositionVector";
import VelocityVector from "@/containers/VelocityVector";
import IDrawable from "@/objects/base/IDrawable";

export default interface IObject extends IDrawable{

    getObject(): Mesh

    getPosition(): PositionVector

    getVelocity(): VelocityVector

    setPosition(position: PositionVector): IObject

    setVelocity(velocity: VelocityVector): IObject

    update(): void

}