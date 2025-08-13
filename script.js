const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

const geometría = new THREE.BoxGeometry();
const geo = new THREE.ConeGeometry();

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cubo = new THREE.Mesh(geometría, material.clone());
const cilindro = new THREE.Mesh(geo, material.clone());

cubo.position.x = -2;
cilindro.position.x = 2;

escena.add(cubo);
escena.add(cilindro);

const objetosAnimados = [cubo, cilindro];
camara.position.z = 6;
function animacion() {
requestAnimationFrame(animacion);

  objetosAnimados.forEach((obj) => {
    obj.rotation.x += 0.01;
    obj.rotation.y += 0.01;
  });

  renderizador.render(escena, camara);
}

animacion();

window.addEventListener('resize', () => {
  camara.aspect = window.innerWidth / window.innerHeight;
  camara.updateProjectionMatrix();
  renderizador.setSize(window.innerWidth, window.innerHeight);
});

document.getElementById('cambiarColorCubo').addEventListener('click', () => {
  cubo.material.color.set(Math.random() * 0xffffff); 
});

document.getElementById('agrandarCilindro').addEventListener('click', () => {
  cilindro.scale.multiplyScalar(1.2); 
});

document.getElementById('reducirCubo').addEventListener('click', () => {
  cubo.scale.multiplyScalar(0.5);
})


