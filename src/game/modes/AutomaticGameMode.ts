import NormalGameMode from "@/game/modes/NormalGameMode";
import IControlList, {setupControl} from "@/game/controls/IControl";
import {Keys} from "@/game/controls/NormalGameControl";
import game from "@/game/Game";
import ComputerWrapper, {Difficulty} from "@/game/ComputerWrapper";

export default class AutomaticGameMode extends NormalGameMode {

    private computerLeft!: ComputerWrapper
    private computerRight!: ComputerWrapper
    private readonly _difficultyLeft: Difficulty
    private readonly _difficultyRight: Difficulty

    constructor(maxPoints: number = 5, difficultyLeft: Difficulty = Difficulty.HARD, difficultyRight: Difficulty = Difficulty.HARD) {
        super(maxPoints);
        this._difficultyLeft = difficultyLeft;
        this._difficultyRight = difficultyRight;
    }

    onSetup(game: game) {
        super.onSetup(game);

        this.computerLeft = new ComputerWrapper(this.players[0], this.game.getBall(), this.movement, this._difficultyLeft);
        this.computerRight = new ComputerWrapper(this.players[1], this.game.getBall(), this.movement, this._difficultyRight);

        this.game.getScreen().addUpdatableObject('computer-left', this.computerLeft);
        this.game.getScreen().addUpdatableObject('computer-right', this.computerRight);
    }

    onStart() {
        super.onStart();

        this.computerLeft.setRunning(true);
        this.computerRight.setRunning(true);
    }

    getGameControls(): IControlList {
        const controls = super.getGameControls();

        // Remove callbacks for right player
        setupControl(controls[Keys.LEFT_PLAYER_UP], () => {}, () => {});
        setupControl(controls[Keys.LEFT_PLAYER_DOWN], () => {}, () => {});
        setupControl(controls[Keys.RIGHT_PLAYER_DOWN], () => {}, () => {});
        setupControl(controls[Keys.RIGHT_PLAYER_DOWN], () => {}, () => {});

        return controls
    }


}