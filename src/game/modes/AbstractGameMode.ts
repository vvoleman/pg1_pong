import IControlList from "@/game/controls/IControl";
import {Sides} from "@/game/Borders";
import _Game from "@/game/_Game";

export default abstract class AbstractGameMode {

    protected game!: _Game;

    public abstract onBallBorderCollision(side: Sides): void;

    public abstract getName(): string;

    public abstract getDescription(): string;

    public onSetup(game: _Game ): void {
        this.game = game;
    }

    public abstract getGameControls(): IControlList;

    public onPause(): void {}

    public onResume(): void {}

    public onStart(): void {}

    public onReset(): void {}




}

