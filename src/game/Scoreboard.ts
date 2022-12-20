import Player from "@/game/Player";

export default class Scoreboard {

    private static _instance: Scoreboard

    private players: { left: Player, right: Player }

    private leftElement: HTMLElement
    private rightElement: HTMLElement

    private constructor(players: { left: Player, right: Player }) {
        const scoreboard = document.getElementById("scoreboard") as HTMLElement
        this.leftElement = scoreboard.querySelector("#left") as HTMLElement
        this.rightElement = scoreboard.querySelector("#right") as HTMLElement
        this.players = players
    }

    update() {
        this.leftElement.innerText = this.players.left.getScore().toString()
        this.rightElement.innerText = this.players.right.getScore().toString()
    }

    public static setup(players: { left: Player, right: Player }): Scoreboard {
        if (!this._instance) {
            this._instance = new Scoreboard(players)
        }
        return this._instance
    }

    public static getInstance(): Scoreboard {
        return this._instance
    }

}