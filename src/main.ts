import AbstractGameMode from "@/game/modes/AbstractGameMode";
import _Game, {GameEvent} from "@/game/_Game";
import NormalGameMode from "@/game/modes/NormalGameMode";
import ComputerGameMode from "@/game/modes/ComputerGameMode";

const menu = document.getElementById("menu");
const result = document.getElementById("result");
if (menu === null || result === null) {
    throw new Error("Menu or result not found.");
}

// Setup new game buttons
const normalGame = menu?.querySelector("[data-type=pvp]")
const computerGame = menu?.querySelector("[data-type=pve]")
const doubleComputerGame = menu?.querySelector("[data-type=eve]")

// Restart button
const restart = result?.querySelector("[data-type=restart]")

restart?.addEventListener("click", ()=>{
    result.style.display = 'none'
    menu.style.display = 'flex'
})

normalGame?.addEventListener("click", () => {
    startNewGame(menu,result, new NormalGameMode(5))
})

computerGame?.addEventListener("click", () => {
    startNewGame(menu,result, new ComputerGameMode(5))
})


function startNewGame(menu: HTMLElement, result: HTMLElement, mode: AbstractGameMode): void {
    menu.style.display = 'none'
    const el = document.querySelector("#game") as HTMLElement

    if (el === null) {
        throw new Error("Game element not found.");
    }

    const game = new _Game(mode)
    el.style.display = 'block'

    game.start()

    game.observe(GameEvent.GAME_OVER, (data: {message: string}) => {
        game.reset()
        el.style.display = 'none'
        result.querySelector("#message")!.innerHTML = data.message
        result.style.display = 'flex'
    })

    game.observe(GameEvent.EXIT, (data: any) => {
        console.log('EXIT Z VENKU')
        game.reset()
        el.style.display = 'none'
        result.querySelector("#message")!.innerHTML = "Hra byla ukončena"
        result.style.display = 'flex'
    })

}