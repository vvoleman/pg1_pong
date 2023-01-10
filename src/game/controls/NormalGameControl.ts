import IControlList from "@/game/controls/IControl";

export enum Keys {
    LEFT_PLAYER_UP='left_player_up',
    LEFT_PLAYER_DOWN='left_player_down',
    RIGHT_PLAYER_UP='right_player_up',
    RIGHT_PLAYER_DOWN='right_player_down',
    EXIT='exit',
    DEBUG='debug',
}

const gameControls: IControlList = {

    [Keys.LEFT_PLAYER_UP]: {
        name: 'Levý hráč nahoru',
        default: 'w',
        keydown: () => {},
        keyup: () => {},
    },
    [Keys.LEFT_PLAYER_DOWN]: {
        name: 'Levý hráč dolů',
        default: 's',
        keydown: () => {},
        keyup: () => {},
    },
    [Keys.RIGHT_PLAYER_UP]: {
        name: 'Pravý hráč nahoru',
        default: 'ArrowUp',
        keydown: () => {},
        keyup: () => {},
    },
    [Keys.RIGHT_PLAYER_DOWN]: {
        name: 'Pravý hráč dolů',
        default: 'ArrowDown',
        keydown: () => {},
        keyup: () => {},
    },
    [Keys.DEBUG]: {
        name: 'Debug',
        default: ';',
        keydown: () => {},
        keyup: () => {},
    },
    [Keys.EXIT]: {
        name: 'Exit',
        default: 'Escape',
        keydown: () => {},
        keyup: () => {}
    }
}

export default gameControls