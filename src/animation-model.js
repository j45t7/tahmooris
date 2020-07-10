import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function modelAnimation(container) {
    let camera;
    let renderer;
    let scene;
    let controls;

    const createCamera = () => {
        camera = new THREE.PerspectiveCamera(
            35,
            container.clientWidth / container.clientHeight,
            0.1,
            200
        );
        camera.position.set(-1.5, 1.5, 100);
    };

    const createLights = () => {
        const ambientLight = new THREE.HemisphereLight(
            0xddeeff, // sky color
            0x202020, // ground color
            6 // intensity
        );

        const mainLight = new THREE.DirectionalLight(0xffffff, 8);
        mainLight.position.set(10, 10, 10);

        scene.add(ambientLight, mainLight);
    };

    const loadModels = () => {
        const loader = new GLTFLoader();
        const modelPosition = new THREE.Vector3(0, -20, 0);

        loader.load(
            'images/nefertiti.glb',
            gltf => onLoad(gltf, modelPosition),
            onProgress,
            onError
        );

        const onLoad = (gltf, position) => {
            const model = gltf.scene.children[0];
            model.position.copy(position);
            scene.add(model);
            // scene.add(gltf.scene);

            // gltf.animations; // Array<THREE.AnimationClip>
            // gltf.scene; // THREE.Group
            // gltf.scenes; // Array<THREE.Group>
            // gltf.cameras; // Array<THREE.Camera>
            // gltf.asset; // Object};
        };
        const onProgress = xhr => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        };

        const onError = error => {
            console.log('Error: ', error);
        };
    };

    const createRenderer = () => {
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.gammaFactor = 2.2;
        renderer.outputEncoding = true;
        renderer.physicallyCorrectLights = true;

        container.appendChild(renderer.domElement);
    };

    const createControls = () => {
        controls = new OrbitControls(camera, container);
    };

    const init = () => {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xdad5f1);

        createCamera();
        createLights();
        createRenderer();
        createControls();
        loadModels();

        renderer.setAnimationLoop(() => {
            update();
            render();
        });
    };

    const update = () => {
        // mesh.rotation.z += 0.01;
        // mesh.rotation.x += 0.01;
        // mesh.rotation.y += 0.01;
    };

    const render = () => {
        renderer.render(scene, camera);
    };

    const handleResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return init();
}
