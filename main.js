import * as THREE from 'three';
// import imgUrl from './hong-kong-observation-deck/textures/texture.jpeg'
// import imgUrl from './hong-kong-observation-deck/source/AIOWskybox1/texture.jpg'
import imgUrl from './xarvels-beachscape-1-spatial-skybox-download/textures/texture.jpg_1.jpeg'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );

var geometry = new THREE.SphereGeometry(30, 60, 60);


// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );



var cube

var onLoad = texture => {

  var objMaterial = new THREE.MeshPhongMaterial({
    map: texture,
    flatShading:true
  });
  objMaterial.side = THREE.DoubleSide;// THREE.BackSide;
  
  cube = new THREE.Mesh( geometry, objMaterial );
  scene.add( cube );

  // animate();

  renderer.render( scene, camera );

};

var onProgress = xhr => {
  console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
};

// Function called when download errors
var onError = error => {
  console.log("An error happened" + error);
};



var loader = new THREE.TextureLoader();
loader.load(imgUrl,onLoad,onProgress,onError);





camera.position.z = 5;

var light = new THREE.AmbientLight( 0xffffff );
scene.add(light);

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
}

