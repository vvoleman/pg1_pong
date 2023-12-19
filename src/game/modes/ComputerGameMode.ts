import NormalGameMode from "@/game/modes/NormalGameMode";
import IControlList, {setupControl} from "@/game/controls/IControl";
import {Keys} from "@/game/controls/NormalGameControl";
import game from "@/game/Game";
import ComputerWrapper, {Difficulty} from "@/game/ComputerWrapper";

export default class ComputerGameMode extends NormalGameMode {

    private computer!: ComputerWrapper
    private readonly _difficulty: Difficulty

    constructor(maxPoints: number = 5, difficulty: Difficulty = Difficulty.HARD) {
        super(maxPoints);
        this._difficulty = difficulty;
    }

    onSetup(game: game) {
        super.onSetup(game);

        this.computer = new ComputerWrapper(this.players[1], this.game.getBall(), this.movement, this._difficulty);

        this.game.getScreen().addUpdatableObject('computer', this.computer);
    }

    onStart() {
        super.onStart();

        this.computer.setRunning(true);
    }

    getGameControls(): IControlList {
       const controls = super.getGameControls();

       // Remove callbacks for right player
       setupControl(controls[Keys.RIGHT_PLAYER_UP], () => {}, () => {});
       setupControl(controls[Keys.RIGHT_PLAYER_DOWN], () => {}, () => {});

       return controls
   }

}
