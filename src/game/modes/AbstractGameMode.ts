import IControlList from "@/game/controls/IControl";
import {Sides} from "@/game/Borders";
import game from "@/game/Game";

export default abstract class AbstractGameMode {

    protected game!: game;

    public abstract onBallBorderCollision(side: Sides): void;

    public abstract getName(): string;

    public abstract getDescription(): string;

    public onSetup(game: game ): void {
        this.game = game;
    }

    public abstract getGameControls(): IControlList;

    public onPause(): void {}

    public onResume(): void {}

    public onStart(): void {}

    public onReset(): void {}




}

