import {
    Camera, Object3D,
    OrthographicCamera,
    Renderer,
    Scene,
    WebGLRenderer
} from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import {GUI} from "dat.gui";
import Collision from "@/managers/Collision";
import Scoreboard from "@/game/Scoreboard";
import SoundPlayer from "@/game/SoundPlayer";
import IUpdatable from "@/objects/IUpdatable";

export default class Screen {

    private scene!: Scene
    private renderer!: Renderer
    private camera!: Camera
    private gui!: GUI

    private stats!: Stats

    private play: boolean = false

    private collision: Collision = Collision.getInstance()

    private updatableObjects: {[key:string]:IUpdatable} = {}

    constructor() {
        this.setupScene()
        this.setupPlugins()
    }

    public setPlay(play: boolean) {
        this.play = play
    }

    public isPlaying(): boolean {
        return this.play
    }

    public reset(): void {
        this.scene.clear()
        // remove inside from #app
        const app = document.getElementById("app")
        const stats = document.getElementById("stats")
        const debug = document.getElementById("debug")
        if (app) {
            app.innerHTML = ''
        }
        if (stats) {
            stats.innerHTML = ''
        }
        if (debug) {
            debug.innerHTML = ''
        }

    }

    public addUpdatableObject(name: string, object: IUpdatable) {
        this.scene.add(object.getObject())
        this.updatableObjects[name] = object
    }

    public removeUpdatableObject(name: string) {
        if (!this.updatableObjects[name]) {
            throw new Error(`Object ${name} not found`)
        }
        this.scene.remove(this.updatableObjects[name] as unknown as Object3D)
        delete this.updatableObjects[name]
    }

    public getScene(): Scene {
        return this.scene
    }

    public getGui(): GUI {
        return this.gui
    }

    setupScene() {
        const scene = new Scene();
        const camera = new OrthographicCamera( window.innerWidth / - 50, window.innerWidth / 50, window.innerHeight / 50, window.innerHeight / -50, - 500, 1000)
        const renderer = new WebGLRenderer();

        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );

        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById("app")?.appendChild(renderer.domElement);

        camera.add(SoundPlayer.getInstance().getListener())

        this.scene = scene
        this.renderer = renderer
        this.camera = camera
    }

    setupPlugins () {
        this.stats = Stats();
        document.getElementById("stats")?.appendChild(this.stats.dom);

        // this.gui = new GUI()
        // const folder = this.gui.addFolder('Camera')
        // folder.add(this.camera.rotation, 'x', -2, 2)
        // folder.add(this.camera.rotation, 'y', -2, 2)
        // folder.add(this.camera.rotation, 'z', -2, 2)
        // folder.open()
    }

    public getWindowSize(): { width: number, height: number } {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    public animate() {
        this.stats.begin()
        requestAnimationFrame(() => this.animate());

        if (this.play) {
            for (const objectName in this.updatableObjects) {
                this.updatableObjects[objectName].update()
            }
            this.collision.update()
            const scoreboard = Scoreboard.getInstance()
            if (scoreboard) {
                scoreboard.update()
            }

        }

        this.renderer.render(this.scene, this.camera);
        this.stats.end()
    }
}