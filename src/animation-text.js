import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';

export default function textAnimation(container) {
    let camera;
    let renderer;
    let scene;
    let mesh;
    let controls;

    const createText = text => {
        const loader = new THREE.FontLoader();
        return loader.load('fonts/helvetiker_regular.typeface.json', font => {
            const geometry = new THREE.TextGeometry(text, {
                font: font,
                size: 80,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelOffset: 0,
                bevelSegments: 5,
            });
            var material = new THREE.MeshPhongMaterial({
                color: 0xff0000,
                specular: 0xffffff,
            });

            mesh = new THREE.Mesh(geometry, material);

            return scene.add(mesh);
        });
    };

    const createCamera = () => {
        camera = new THREE.PerspectiveCamera(
            35,
            container.clientWidth / container.clientHeight,
            0.1,
            100
        );
        camera.position.set(-4, 4, 10);
    };

    const createLights = () => {
        const ambientLight = new THREE.HemisphereLight(
            0xddeeff, // sky color
            0x202020, // ground color
            4 // intensity
        );

        const mainLight = new THREE.DirectionalLight(0xffffff, 4);
        mainLight.position.set(10, 10, 10);
        // mainLight.position.copy(camera.position);

        scene.add(ambientLight, mainLight);
    };

    // const createMeshes = () => {
    //     const geometry = new THREE.BoxBufferGeometry(1, 1, 1);

    //     const textureLoader = new THREE.TextureLoader();
    //     const texture = textureLoader.load('images/glass.jpg');
    //     texture.encoding = THREE.sRGBEncoding;
    //     texture.anisotropy = 16;

    //     const material = new THREE.MeshStandardMaterial({
    //         map: texture,
    //     });

    //     mesh = new THREE.Mesh(geometry, material);
    //     scene.add(mesh);
    // };

    const createRenderer = () => {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.gammaFactor = 2.2;
        renderer.gammaOutput = true;
        renderer.physicallyCorrectLights = true;

        container.appendChild(renderer.domElement);
    };

    // const canvas = renderer.domElement;
    // canvas.addEventListener('mousemove', onMouseMove);

    // const onMouseMove = e => {
    //     mesh.rotation.y += e.movementX * 0.005;
    //     mesh.rotation.x += e.movementX * 0.005;
    // };

    const createControls = () => {
        controls = new OrbitControls(camera, container);
        controls.target.set(0, 5, 0);
        controls.update();
    };

    const init = () => {
        scene = new THREE.Scene();

        createCamera();
        createLights();
        createRenderer();
        createText('ART');
        // createMeshes();
        createControls();

        // renderer.setAnimationLoop(() => {
        //     update();
        //     render();
        // });
    };

    // const update = () => {
    //     mesh.rotation.z += 0.01;
    //     mesh.rotation.x += 0.01;
    //     mesh.rotation.y += 0.01;
    // };

    // const render = () => {
    //     renderer.render(scene, camera);
    // };

    const handleResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return init();
}
