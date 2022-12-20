import {Audio, AudioListener, AudioLoader} from "three";
import bounce1 from "../assets/sounds/bounce1.mp3";
import bounce2 from "../assets/sounds/bounce2.mp3";
import score from "../assets/sounds/score.mp3";


export enum GameSound {
    BOUNCE1 = bounce1,
    BOUNCE2 = bounce2,
    SCORE = score,
}

export default class SoundPlayer {

    private static _instance: SoundPlayer

    private listener: AudioListener = new AudioListener()
    private sound: Audio
    private audioLoader: AudioLoader = new AudioLoader()

    private constructor() {
        this.sound = new Audio(this.listener)
    }

    play(sound: GameSound) {
        this.audioLoader.load(`${sound}`, (buffer) => {
            this.sound.setBuffer(buffer)
            this.sound.setLoop(false)
            this.sound.setVolume(0.5)
            this.sound.play()
        })
    }

    public getListener(): AudioListener {
        return this.listener
    }

    public static getInstance(): SoundPlayer {
        if (!this._instance) {
            this._instance = new SoundPlayer()
        }
        return this._instance
    }

}