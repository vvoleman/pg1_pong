export default class DependencyContainer {
    private static instance: DependencyContainer;

    private container: Map<string, any> = new Map();

    private constructor() {}

    public add<T>(key: any, value: T): void {
        this.container.set(key, value);
    }

    public get<T>(key: any): T {
        return this.container.get(key);
    }

    static getInstance(): DependencyContainer {
        if (!DependencyContainer.instance) {
            DependencyContainer.instance = new DependencyContainer();
        }
        return DependencyContainer.instance;
    }
}