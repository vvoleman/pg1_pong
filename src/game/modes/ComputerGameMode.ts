import NormalGameMode from "@/game/modes/NormalGameMode";
import IControlList, {setupControl} from "@/game/controls/IControl";
import {Keys} from "@/game/controls/NormalGameControl";

export default class ComputerGameMode extends NormalGameMode {

   getGameControls(): IControlList {
       const controls = super.getGameControls();

       // Remove callbacks for right player
       setupControl(controls[Keys.RIGHT_PLAYER_UP], () => {}, () => {});
       setupControl(controls[Keys.RIGHT_PLAYER_DOWN], () => {}, () => {});

       return controls
   }


}