import { FC } from 'react'
import SceneComponent from 'babylonjs-hook'
import { Scene, FreeCamera, Vector3, HemisphericLight, MeshBuilder, Mesh, Color4 } from '@babylonjs/core';

import styles from './babylonjs.module.scss'

const Babylonjs: FC = () => {
    
    let box: Mesh;
    let sphere: Mesh;

    const onSceneReady = (scene: Scene) => {

        // Set background color
        scene.clearColor = Color4.FromHexString('#00000000')

        // This creates and positions a free camera (non-mesh)
        const camera = new FreeCamera('camera1', new Vector3(0, 5, -8), scene);
        
        // This targets the camera to scene origin
        camera.setTarget(Vector3.Zero());
        
        const canvas = scene.getEngine().getRenderingCanvas();
        
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
        
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
        
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
        
        // Our built-in 'box' shape.
        box = MeshBuilder.CreateBox('box', { size: 2 }, scene);
        
        // Move the box upward 1/2 its height
        box.position.y = 1;
        
        // My sphere shape.
        sphere = MeshBuilder.CreateSphere('sphere', { diameter: 1 }, scene);
        
        // Move the sphere above the box.
        sphere.position.y = 2.5;
        
        // Our built-in 'ground' shape.
        MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);
    };
    
    /**
    * Will run on every frame render.  We are spinning the box on y-axis.
    */
    const onRender = (scene: Scene) => {
        if (box !== undefined) {
            const deltaTimeInMillis = scene.getEngine().getDeltaTime();
        
            const rpm = 10;
            box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
        }
    };

    return (
        <div className={styles.babylonjs}>
            <SceneComponent
                antialias
                onSceneReady={onSceneReady}
                onRender={onRender}
                style={{width: '100%', verticalAlign: 'middle'}}
            />
        </div>
    )
}

export default Babylonjs
