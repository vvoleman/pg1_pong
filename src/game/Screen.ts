import {Camera, GridHelper, OrthographicCamera, Renderer, Scene, WebGLRenderer} from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import {TrackballControls} from "three/examples/jsm/controls/TrackballControls";
import {GUI} from "dat.gui";
import AbstractObject from "@/objects/AbstractObject";

export default class Screen {

    private scene: Scene
    private renderer: Renderer
    private camera: Camera
    private gui: GUI

    private controls: TrackballControls
    private stats: Stats

    private updatableObjects: AbstractObject[] = []

    constructor() {
        this.setupScene()
        this.setupPlugins()
    }

    public addUpdatableObject(object: AbstractObject) {
        this.scene.add(object.getObject())
        this.updatableObjects.push(object)
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
        document.body.appendChild(renderer.domElement);

        this.scene = scene
        this.renderer = renderer
        this.camera = camera
    }

    setupPlugins () {
        this.stats = Stats();
        document.body.appendChild(this.stats.dom);

        this.gui = new GUI()
        const folder = this.gui.addFolder('Camera Position')
        folder.add(this.camera.position, 'x', -100, 100)
        folder.add(this.camera.position, 'y', -100, 100)
        folder.add(this.camera.position, 'z', -100, 100)
        folder.open()

        const folderRotation = this.gui.addFolder('Camera Rotation')
        folderRotation.add(this.camera.rotation, 'x', -100, 100)
        folderRotation.add(this.camera.rotation, 'y', -100, 100)
        folderRotation.add(this.camera.rotation, 'z', -100, 100)
        folderRotation.open()

        const size = 100;
        const divisions = 100;

        const gridHelper = new GridHelper( size, divisions );
        this.scene.add( gridHelper );
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

        for (const updatableObject of this.updatableObjects) {
            updatableObject.update()
        }

        this.renderer.render(this.scene, this.camera);
        this.stats.end()
    }
}