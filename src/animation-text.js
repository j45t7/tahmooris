import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';

export default function textAnimation(container) {
    let camera;
    let scene;
    let mesh;
    let renderer;
    let controls;

    const createCamera = () => {
        camera = new THREE.PerspectiveCamera(
            35,
            container.clientWidth / container.clientHeight,
            0.1,
            100
        );
        camera.position.set(0, 0, 20);
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

    const createText = text => {
        const loader = new THREE.FontLoader();
        loader.load('fonts/Manrope-SemiBold-Regular.json', font => {
            const geometry = new THREE.TextGeometry(text, {
                font: font,
                size: 1,
                height: 0.5,
                curveSegments: 10,
                bevelEnabled: true,
                bevelThickness: 0.01,
                bevelSize: 0.01,
                bevelOffset: 0.05,
                bevelSegments: 3,
            });
            geometry.center();
            const material = new THREE.MeshNormalMaterial();

            // const textureLoader = new THREE.TextureLoader();
            // const texture = textureLoader.load('images/vilnius.jpg');
            // texture.encoding = THREE.sRGBEncoding;
            // texture.anisotropy = 16;

            // const material = new THREE.MeshStandardMaterial({
            //     map: texture,
            // });

            mesh = new THREE.Mesh(geometry, material);

            scene.add(mesh);
        });
    };

    const createRenderer = () => {
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.gammaFactor = 2.2;
        renderer.gammaOutput = true;
        renderer.physicallyCorrectLights = true;

        container.appendChild(renderer.domElement);
    };

    const createControls = () => {
        controls = new OrbitControls(camera, renderer.domElement);
    };

    const init = () => {
        scene = new THREE.Scene();

        createCamera();
        createLights();
        createRenderer();
        createText('TAHMOORIS');
        createControls();

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
