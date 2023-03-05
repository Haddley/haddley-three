import { SphereGeometry,DirectionalLight,MeshNormalMaterial, PerspectiveCamera,Scene,WebGLRenderer,SphereBufferGeometry,MeshPhongMaterial,BackSide,Mesh,TextureLoader, AmbientLight } from 'three'
import imgUrl from './hong-kong-observation-deck/textures/texture.jpg'

// "Hong Kong Observation Deck" (https://skfb.ly/oAzOz) by BreathlesSherpa is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).


var scene = new Scene();
var camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.z = 7

var onLoad = texture => {

  var objGeometry = new SphereGeometry(30, 60, 60);
  var objMaterial = new MeshPhongMaterial({
    map: texture,
    flatShading:true
  });
  objMaterial.side = BackSide;
  var earthMesh = new Mesh(objGeometry, objMaterial);

  scene.add(earthMesh);

  var light = new AmbientLight( 0xffffff );
scene.add(light);

  //start animation
  // this.start();
};

var onProgress = xhr => {
  console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
};

// Function called when download errors
var onError = error => {
  console.log("An error happened" + error);
};



var loader = new TextureLoader();
loader.load(imgUrl,onLoad,onProgress,onError);

const renderer = new WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function render() {

  renderer.render( scene, camera );

}

window.addEventListener( 'resize', function () {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}, false );

render();