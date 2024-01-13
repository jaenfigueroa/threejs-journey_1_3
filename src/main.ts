import * as THREE from 'three'
const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement

// scene
const scene = new THREE.Scene()

// objet
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red', wireframe: true })

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// camera

const sizes = {
  width: 800,
  height: 600,
}

const camera = new THREE.PerspectiveCamera(
  75, // fov -> field of view -> angulo de vision / lo recomendado es 35, modo principal sera 75 por ahora
  sizes.width / sizes.height // aspect -> ancho y alto de la pantalla
  // 0.1, // near -> distancia minima de renderizado
  // 100 // far -> distancia maxima de renderizado
)

camera.position.z = 3 // muevo la camara hacia atras para que se vea el cubo
// camera.position.x = 1
// camera.position.y = 1

scene.add(camera)

// Renderer

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})

renderer.setSize(sizes.width, sizes.height)

// renderizar la escena y la camara en el canvas
renderer.render(scene, camera)
