import IUpdatable from "@/objects/IUpdatable";
import IObject from "@/objects/IObject";
import {BufferGeometry, Line, LineBasicMaterial, LineSegments, Vector3} from "three";
import PositionVector from "@/containers/PositionVector";
import VelocityVector from "@/containers/VelocityVector";
import Borders from "@/game/Borders";
import DependencyContainer from "@/managers/DependencyContainer";
import Debug from "@/managers/Debug";
import Game from "@/game/Game";
import BallMovementManager from "@/managers/BallMovementManager";

export default class BallTrajectory implements IUpdatable {
    private debugObject: IObject
    private readonly line: Line | LineSegments
    private position: PositionVector
    private velocity: VelocityVector
    private borders: Borders
    private movement: BallMovementManager

    constructor(debugObject: IObject) {
        this.debugObject = debugObject
        this.line = this.setupObject()
        this.borders = DependencyContainer.getInstance().get(Borders)
        this.movement = DependencyContainer.getInstance().get(BallMovementManager)
    }

    public getObject(): Line | LineSegments {
        return this.line
    }

    public setDebugObject(object: IObject): BallTrajectory {
        this.debugObject = object
        return this
    }

    public setupObject(): Line {
        const geometry = new BufferGeometry().setFromPoints([]);
        const material = new LineBasicMaterial({color: 'green', linewidth: 2});
        return new Line(geometry, material);
    }

    setPoint(position: PositionVector, velocity: VelocityVector) {
        this.position = position
        this.velocity = velocity
    }

    update(): void {
        if (!this.position || !this.velocity) {
            return
        }

        const positions = this.getVertices()
        console.log(positions)
        this.line.geometry.setFromPoints(positions);

        this.line.geometry.attributes.position.needsUpdate = true;
        this.velocity = null
    }

    private getVertices(): Array<Vector3> {
        return this.movement.getPath()
    }
}