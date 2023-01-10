import {BufferGeometry, Line, LineBasicMaterial, LineSegments, Vector3} from "three";
import BallMovementManager from "@/managers/BallMovementManager";
import IDrawable from "@/objects/base/IDrawable";

export default class BallTrajectory implements IDrawable {
    private readonly line: Line | LineSegments
    private movement: BallMovementManager
    private running: boolean = false

    constructor(movement: BallMovementManager) {
        this.line = this.setupObject()
        this.movement = movement
    }

    setRunning(running: boolean): BallTrajectory {
        this.running = running

        this.getObject().visible = running
        return this
    }

    getRunning(): boolean {
        return this.running
    }

    public getObject(): Line | LineSegments {
        return this.line
    }

    public setupObject(): Line {
        const geometry = new BufferGeometry().setFromPoints([]);
        const material = new LineBasicMaterial({color: 'green'});
        return new Line(geometry, material);
    }

    update(): void {
        if (!this.running) return

        const positions = this.getVertices()
        this.line.geometry.setFromPoints(positions);

        this.line.geometry.attributes.position.needsUpdate = true;
    }

    private getVertices(): Array<Vector3> {
        return this.movement.getPath()
    }
}