import IControlList from "@/game/controls/IControl";

export enum Keys {
    PAUSE = 'pause',
    BALL_LEFT = 'ball-left',
    BALL_RIGHT = 'ball-right',
    BALL_UP = 'left-player-up',
    BALL_DOWN = 'left-player-down',
    STOP_BALL = 'stop-ball',
}

const gameControls: IControlList = {
    [Keys.PAUSE]: {
        name: 'Pozastavit',
        default: 'p',
        keydown: () => {},
        keyup: () => {},
    },
    [Keys.BALL_LEFT]: {
        name: 'Pozastavit',
        default: '4',
        keydown: () => {},
        keyup: () => {},
    },
    [Keys.BALL_RIGHT]: {
        name: 'Pozastavit',
        default: '6',
        keydown: () => {},
        keyup: () => {},
    },
    [Keys.BALL_UP]: {
        name: 'Pozastavit',
        default: '8',
        keydown: () => {},
        keyup: () => {},
    },
    [Keys.BALL_DOWN]: {
        name: 'Pozastavit',
        default: '2',
        keydown: () => {},
        keyup: () => {},
    },
    [Keys.STOP_BALL]: {
        name: 'STOP',
        default: '5',
        keydown: () => {},
        keyup: () => {},
    },
}

export default gameControls