import IControl from "@/game/controls/IControl";
import {KeyPressManager} from "@/managers/KeyPressManager";
import IControlList from "@/game/controls/IControl";

export default class ControlsManager {

    private controls: {name: string, list: IControlList}[] = [];

    public add(name: string, list: IControl): void {
        this.controls.push({name, list});
    }

    private registerControls(): void {
        this.controls.forEach(({list}) => {

        });
    }

}