import IObject from "@/objects/base/IObject";
import {BufferGeometry, Line, LineBasicMaterial, LineSegments} from "three";
import Borders from "@/game/Borders";
import PositionVector from "@/containers/PositionVector";
import IDrawable from "@/objects/base/IDrawable";

export default class ClosestBorderSide implements IDrawable {

    private debugObject: IObject
    private readonly line: Line|LineSegments
    private running: boolean = false

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

    setRunning(running: boolean): ClosestBorderSide {
        this.running = running

        this.getObject().visible = running
        return this
    }

    getRunning(): boolean {
        return this.running
    }

    public setupObject(): Line {
        const positions = this.getPositions()

        const geometry = new BufferGeometry().setFromPoints([positions.start, positions.end]);

        const material = new LineBasicMaterial({color: 0xff0000});

        return new Line(geometry, material);
    }

    update(): void {
        if (!this.running) return

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