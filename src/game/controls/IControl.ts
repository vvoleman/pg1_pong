interface IControl {
    name: string;
    default: string;
    keydown: KeyCallback;
    keyup: KeyCallback;
}

export default interface IControlList {
    [key: string]: IControl
}

type KeyCallback = (e: KeyboardEvent) => void;

export const setupControl = (control: IControl, keydown: KeyCallback, keyup: KeyCallback): void => {
    control.keydown = keydown;
    control.keyup = keyup;
}