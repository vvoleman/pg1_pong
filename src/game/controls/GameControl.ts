import IControlList from "@/game/controls/IControl";

export enum Keys {
    PAUSE = 'pause'
}

const gameControls: IControlList = {
    [Keys.PAUSE]: {
        name: 'Pozastavit',
        default: 'p',
        keydown: () => {},
        keyup: () => {},
    }
}

export default gameControls