export default abstract class Observable {

    private observers: {[key: string]: Function[]}

    constructor() {
        this.observers = {}
    }

    public observe(event: string, callback: Function): Observable {
        if (this.observers[event] === undefined) {
            this.observers[event] = []
        }
        this.observers[event].push(callback)
        return this
    }

    public unobserve(event: string, callback: Function): Observable {
        if (this.observers[event] === undefined) {
            return this
        }
        this.observers[event] = this.observers[event].filter((cb) => cb !== callback)
        return this
    }

    protected notify(event: string, params: object): Observable {
        if (this.observers[event] === undefined) {
            return this
        }
        for (const observer of this.observers[event]) {
            observer(params)
        }
        return this
    }

}