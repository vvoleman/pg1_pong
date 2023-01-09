import IControl from "@/game/controls/IControl";
import IControlList from "@/game/controls/IControl";

export default abstract class AbstractGameMode {

    public abstract getName(): string;

    public abstract getDescription(): string;

    public abstract onSetup(): void;

    public abstract getGameControls(): IControlList;

    public onPause(): void {}

    public onResume(): void {}

    public onStart(): void {}

    public onRestart(): void {}




}

