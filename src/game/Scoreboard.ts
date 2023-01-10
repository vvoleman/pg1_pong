import Player from "@/game/Player";

export default class Scoreboard {

    private static _instance: Scoreboard|undefined

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

    reset() {
        this.leftElement.innerText = "0"
        this.rightElement.innerText = "0"
    }

    public static setup(players: { left: Player, right: Player }): Scoreboard {
        if (!this._instance) {
            this._instance = new Scoreboard(players)
        }
        return this._instance
    }

    public static getInstance(): Scoreboard {
        return <Scoreboard>this._instance
    }

    public static removeInstance() {
        this._instance = undefined
    }

}