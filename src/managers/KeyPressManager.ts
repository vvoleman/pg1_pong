export enum KeyEvent {
    UP = "keyup",
    DOWN = "keydown",
    PRESS = "keypress",
}

export interface KeyStore {
    [key: string]: { [key: string]: Function[] }
}

export class KeyPressManager {

    private static instance: KeyPressManager
    private readonly keyEvents: KeyStore

    private constructor() {
        this.keyEvents = {
            [KeyEvent.UP]: {},
            [KeyEvent.DOWN]: {},
            [KeyEvent.PRESS]: {},
        }

        this.setupListeners()
    }

    protected setupListeners() {
        const events = [KeyEvent.UP, KeyEvent.DOWN, KeyEvent.PRESS]

        for (const event of events) {
            document.addEventListener(event, (e: KeyboardEvent) => {
                const key = e.key
                console.log(key)
                if (this.keyEvents[event][key] === undefined) {
                    return
                }
                for (const callback of this.keyEvents[event][key]) {
                    callback(e)
                }
            })

        }
    }

    public addListener(key: string, event: KeyEvent, callback: Function): KeyPressManager {

        if (this.keyEvents[event] === undefined) {
            throw new Error('Event not supported')
        }

        if (this.keyEvents[event][key] === undefined) {
            this.keyEvents[event][key] = []
        }

        this.keyEvents[event][key].push(callback)

        return this
    }

    public removeListener(key: string, event: KeyEvent, callback: Function): KeyPressManager {

        if (this.keyEvents[event] === undefined) {
            throw new Error('Event not supported')
        }

        if (this.keyEvents[event][key] === undefined) {
            return this
        }

        const index = this.keyEvents[event][key].indexOf(callback)
        if (index > -1) {
            this.keyEvents[event][key].splice(index, 1)
        }

        return this
    }

    public static getInstance(): KeyPressManager {
        if (this.instance === undefined) {
            this.instance = new KeyPressManager()
        }
        return this.instance
    }

}