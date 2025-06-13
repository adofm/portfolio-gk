let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    document.getElementById('webgl-container').appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
    onWindowResize();
    animate();
}

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', function() {
    init();
});
