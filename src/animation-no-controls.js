import * as THREE from 'three';

export default function animation(container) {
    let camera;
    let scene;
    let mesh;
    let renderer;

    const createCamera = () => {
        camera = new THREE.PerspectiveCamera(
            35,
            container.clientWidth / container.clientHeight,
            0.1,
            100
        );
        camera.position.set(0, 0, 10);
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

    const createMeshes = () => {
        const geometry = new THREE.BoxBufferGeometry(1, 1, 1);

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('images/glass.jpg');
        texture.encoding = THREE.sRGBEncoding;
        texture.anisotropy = 16;

        const material = new THREE.MeshStandardMaterial({
            map: texture,
        });

        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    };

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

    const init = () => {
        scene = new THREE.Scene();

        createCamera();
        createLights();
        createRenderer();
        createMeshes();

        renderer.setAnimationLoop(() => {
            update();
            render();
        });
    };

    const update = () => {
        mesh.rotation.z += 0.01;
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
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
