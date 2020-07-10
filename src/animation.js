import * as THREE from 'three';

export default function animation(container) {
    let camera;
    let renderer;
    let scene;
    let mesh;

    const init = () => {
        scene = new THREE.Scene();
        const fov = 35;
        const aspect = container.clientWidth / container.clientHeight;
        const near = 0.1;
        const far = 100;

        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 0, 10);

        const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
        // const material = new THREE.MeshBasicMaterial({ color: 0x190a1e });
        const material = new THREE.MeshStandardMaterial({ color: 0x190a1e });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const light = new THREE.DirectionalLight(0xffffff, 5.0);
        light.position.set(10, 10, 10);
        scene.add(light);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        container.appendChild(renderer.domElement);
    };

    const handleResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    init();

    const update = () => {
        mesh.rotation.z += 0.01;
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
    };

    const render = () => {
        renderer.render(scene, camera);
    };

    return renderer.setAnimationLoop(() => {
        update();
        render();
    });
}
