import IObject from "@/objects/base/IObject";
import {Box3} from "three";

export class CollisionPair {
    private readonly object1: IObject;
    private readonly object2: IObject;

    private readonly id: string

    private readonly callback: (object1: IObject, object2: IObject) => void;

    constructor(id: string, object1: IObject, object2: IObject, callback: (object1: IObject, object2: IObject) => void) {
        this.object1 = object1;
        this.object2 = object2;
        this.callback = callback;

        // random id
        this.id = id
    }

    public getId(): string {
        return this.id
    }

    public doesCollide(): boolean {
        const bbox1 = new Box3().setFromObject(this.object1.getObject());
        const bbox2 = new Box3().setFromObject(this.object2.getObject());

        return bbox1.intersectsBox(bbox2);
    }

    public execute(): void {
        this.callback(this.object1, this.object2);
    }


}

export default class Collision {

    private static instance: Collision

    private pairs: Array<CollisionPair> = []

    private constructor() {
    }

    public static getInstance(): Collision {
        if (!Collision.instance) {
            Collision.instance = new Collision()
        }
        return Collision.instance
    }

    public addPair(id: string, object1: IObject, object2: IObject, callback: (object1: IObject, object2: IObject) => void): void {
        this.pairs.push(new CollisionPair(id, object1, object2, callback))
    }

    public removePair(id: string): void {
        this.pairs = this.pairs.filter(pair => pair.getId() !== id)
    }

    public clear(): void {
        this.pairs = []
    }

    public update(): void {
        for (let pair of this.pairs) {
            if (pair.doesCollide()) {
                pair.execute()
            }
        }
    }


}