import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';

export default function animation(container) {
    let camera;
    let renderer;
    let scene;
    let material;
    let geometry;
    let mesh;
    let controls;

    const createCamera = () => {
        camera = new THREE.PerspectiveCamera(
            35,
            container.clientWidth / container.clientHeight,
            0.1,
            100
        );
        camera.position.set(-4, 4, 20);
    };

    const createMeshes = () => {
        const radius = 5;
        const widthSegments = 40;
        const heightSegments = 30;
        geometry = new THREE.SphereBufferGeometry(
            radius,
            widthSegments,
            heightSegments
        );

        material = new THREE.PointsMaterial({
            color: 'white',
            sizeAttenuation: false,
            size: 3, // in pixels if not attenuated
            // size: 0.2, // in world units if attenuated
        });

        mesh = new THREE.Points(geometry, material);
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

    const createControls = () => {
        controls = new OrbitControls(camera, renderer.domElement);
    };

    const init = () => {
        scene = new THREE.Scene();

        createCamera();
        createMeshes();
        createRenderer();
        createControls();

        renderer.setAnimationLoop(() => {
            update();
            render();
        });
    };

    const update = () => {
        mesh.rotation.z += 0.001;
        mesh.rotation.x += 0.001;
        mesh.rotation.y += 0.001;
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
