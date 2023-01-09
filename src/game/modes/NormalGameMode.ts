import AbstractGameMode from "@/game/modes/AbstractGameMode";
import Player from "@/game/Player";
import IControl, {setupControl} from "@/game/controls/IControl";
import gameControls, {Keys} from "@/game/controls/NormalGameControl";

export default class NormalGameMode extends AbstractGameMode {

    protected players: Player[] = []

    getDescription(): string {
        return "Výchozí hra. Hráč vs Hráč.";
    }

    getName(): string {
        return "Normální hra";
    }

    getGameControls(): IControl {
        const controls = gameControls

        // Left player up
        setupControl(
            controls[Keys.LEFT_PLAYER_UP],
            () => this.players[0].moveUp(true),
            () => this.players[0].moveUp(false)
        )

        // Left player down
        setupControl(
            controls[Keys.LEFT_PLAYER_DOWN],
            () => this.players[0].moveDown(true),
            () => this.players[0].moveDown(false)
        )
    }

    onSetup(): void {

    }


}