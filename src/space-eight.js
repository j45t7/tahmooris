import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';

export default function spaceEight(container) {
    let camera;
    let renderer;
    let scene;
    let meshL;
    let meshR;
    let controls;

    const createCamera = () => {
        camera = new THREE.PerspectiveCamera(
            35,
            container.clientWidth / container.clientHeight,
            0.1,
            100
        );
        camera.position.set(0, 5, 15);
    };

    const createLights = () => {
        const ambientLight = new THREE.HemisphereLight(
            0xddeeff, // sky color
            0x202020, // ground color
            6 // intensity
        );

        const mainLight = new THREE.DirectionalLight(0xffffff, 6);
        mainLight.position.set(0, 10, 0);
        mainLight.target.position.set(-5, 0, 0);

        scene.add(ambientLight, mainLight);
    };

    const createMeshes = () => {
        const geometryL = new THREE.PlaneBufferGeometry(4, 5);
        const geometryR = new THREE.PlaneBufferGeometry(4, 5);

        const textureLoader = new THREE.TextureLoader();
        const textureL = textureLoader.load('/images/t3.jpg');
        const textureR = textureLoader.load('/images/t4.jpg');
        textureL.encoding = THREE.sRGBEncoding;
        textureL.anisotropy = 16;
        textureR.encoding = THREE.sRGBEncoding;
        textureR.anisotropy = 16;

        const materialL = new THREE.MeshStandardMaterial({
            map: textureL,
        });

        const materialR = new THREE.MeshStandardMaterial({
            map: textureR,
        });

        meshL = new THREE.Mesh(geometryL, materialL);
        meshL.position.x = -3;
        meshL.position.y = 1;
        const pivotL = new THREE.Object3D();
        pivotL.add(meshL);
        pivotL.rotation.y = 1;

        meshR = new THREE.Mesh(geometryR, materialR);
        meshR.position.x = 3;
        meshR.position.y = 1;
        const pivotR = new THREE.Object3D();
        pivotR.add(meshR);
        pivotR.rotation.y = -1;

        // const gallery = new THREE.Group();
        // gallery.add(meshA, meshB)
        scene.add(pivotL, pivotR);
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

    const createControls = () => {
        controls = new OrbitControls(camera, renderer.domElement);
        // controls.target.set(0, -0.4, 0);
        // controls.update();
    };

    const init = () => {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x161616);

        createCamera();
        createLights();
        createMeshes();
        createRenderer();
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
