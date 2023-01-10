import {IControl} from "@/game/controls/IControl";
import {KeyEvent, KeyPressManager} from "@/managers/KeyPressManager";

export interface ControlRecord {
    [key: string]: IControl
}

export default class ControlsManager {

    private controls: ControlRecord = {};
    private _manager: KeyPressManager = KeyPressManager.getInstance()
    private static instance: ControlsManager;

    private constructor() {}

    public static getInstance(): ControlsManager {
        if (!ControlsManager.instance) {
            ControlsManager.instance = new ControlsManager()
        }

        return ControlsManager.instance
    }

    public add(name: string, control: IControl): void {
        this.controls[name] = control

        this._manager.addListener(control.default, KeyEvent.DOWN, control.keydown)
        this._manager.addListener(control.default, KeyEvent.UP, control.keyup)

        if (control.keypress) {
            this._manager.addListener(control.default, KeyEvent.PRESS, control.keypress)
        }
    }

    public remove(name: string): void {
        this._manager.removeListener(name, KeyEvent.DOWN, this.controls[name].keydown)
        this._manager.removeListener(name, KeyEvent.UP, this.controls[name].keyup)

        if (this.controls[name].keypress !== undefined) {
            this._manager.removeListener(name, KeyEvent.PRESS, this.controls[name].keypress as Function)
        }

        delete this.controls[name]
    }

    public clearAll(): void {
        for (const name in this.controls) {
            this.remove(name)
        }
    }

}