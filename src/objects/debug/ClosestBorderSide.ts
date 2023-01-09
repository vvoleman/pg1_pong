import IObject from "@/objects/IObject";
import {BufferGeometry, Line, LineBasicMaterial, LineSegments} from "three";
import Borders from "@/game/Borders";
import IUpdatable from "@/objects/IUpdatable";
import PositionVector from "@/containers/PositionVector";
import Debug from "@/managers/Debug";

export default class ClosestBorderSide implements IUpdatable {

    private debugObject: IObject
    private readonly line: Line|LineSegments

    constructor(debugObject: IObject) {
        this.debugObject = debugObject
        this.line = this.setupObject()
    }

    public getObject(): Line|LineSegments {
        return this.line
    }

    public setDebugObject(object: IObject): ClosestBorderSide {
        this.debugObject = object
        return this
    }

    public setupObject(): Line {
        const positions = this.getPositions()

        const geometry = new BufferGeometry().setFromPoints([positions.start, positions.end]);

        const material = new LineBasicMaterial({color: 0xff0000});

        return new Line(geometry, material);
    }

    update(): void {
        const positions = this.getPositions()
        this.line.geometry.setFromPoints([positions.start, positions.end]);

        this.line.geometry.attributes.position.needsUpdate = true;
    }

    private getPositions(): { start: PositionVector, end: PositionVector } {
        const pos = this.debugObject.getPosition()
        const closest = Borders.getClosesBorder(pos)
        const closestPos = Borders.getSidePosition(closest, pos)
        return {start: pos, end: closestPos}
    }

}