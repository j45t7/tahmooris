import * as THREE from 'three';

export default function animation(container) {
    // SCENE
    const scene = new THREE.Scene();

    // container = document.querySelector('#scene-container');
    // we are passing the container as an argument so it is not necessary to traverse the DOM here

    // scene.background = new THREE.Color(0x8fbcd4);
    // this sets a color but we want a transparent background

    // CAMERA
    const fov = 35; // field of view in degrees (the angle of the frustrum)
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1; // near clipping plane
    const far = 100; // far clipping plane
    // these last two define the frustrum: objects closer or further are not visible
    // the closer they are together, the more efficient the render
    // one unit is 1 meter. 100 m is a good sized frustrum

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // ^ you can also just pass the values directly rather than storing them in variables
    // the other type of camera is camera = new THREE.OrthographicCamera, in which objects are all the same size Iit has different params tho

    camera.position.set(0, 0, 10);
    // ^ this just brings the camera back from the object, so also possible to use camera.position.z = 5;

    // GEOMETRY
    const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

    // MATERIAL
    const material = new THREE.MeshBasicMaterial();
    // const material = new THREE.MeshBasicMaterial({ color: 0x190a1e });
    // to change the color after initial set: material.color.set( '0xff0000' );
    // MeshBasicMaterial can take around 40 params. You can create a spec object with the params you need then pass it to the function
    // basic material does not react to light, standard material does

    // MESH: the object, consisting of geometry (shape) and material (surface)
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // RENDERER
    // alpha and setClearColor give a transparent background; antialias smooths the edges of the object
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
    });
    renderer.setClearColor(0x000000, 0);

    renderer.setSize(container.clientWidth, container.clientHeight);
    // renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setPixelRatio(window.devicePixelRatio);
    // this optimises for different devices

    container.appendChild(renderer.domElement);

    // ANIMATION
    const animate = () => {
        requestAnimationFrame(animate);

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    return animate();
}
