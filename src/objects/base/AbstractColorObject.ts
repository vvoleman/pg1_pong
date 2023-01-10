import AbstractObject from "@/objects/base/AbstractObject";
import {Mesh, MeshBasicMaterial} from "three";

export default abstract class AbstractColorObject extends AbstractObject{

    protected color: string

    constructor(color: string) {
        super(new MeshBasicMaterial({color: color}))
        this.color = color
    }

    public setColor(color: string): AbstractColorObject {
        this.color = color
        this.setMaterial(new MeshBasicMaterial({color: color}))
        return this
    }

    public getColor(): string {
        return this.color
    }

    protected abstract setupObject(): Mesh

    abstract update(): void

}