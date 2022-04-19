let scene, camera, renderer, controls, pointlight;

function init() {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight)
  document.body.appendChild(renderer.domElement)

  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure =1.25;

  camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000)
  camera.position.set(0,0,500)
  scene.add(camera)

  controls = new THREE.OrbitControls(camera, renderer.domElement)
  scene.add(controls)

  pointlight1 = new THREE.PointLight(0xffffff,1)
  // pointlight2 = new THREE.PointLight(0xffffff,1)
  pointlight1.position.set(200,200,200)
  // pointlight2.position.set(100,100,100)
  scene.add(pointlight1);

  let envmaploader = new THREE.PMREMGenerator(renderer)

  new THREE.RGBELoader().load(
    //polyhaven
    'texture/snowy_park_01_4k.pic',
    function (hdrmap) {
      let envmap = envmaploader.fromCubemap(hdrmap)
      let texture = new THREE.CanvasTexture(new THREE.FlakesTexture())
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.x =10;
      texture.repeat.y = 6;
    
      const ballMaterial = {
        clearcoat:1.0,
        cleacoatRoughness:0.1,
        metalness:0.95,
        roughness:0.2,
        color: new THREE.Color( 'black' ),
        normalMap: texture,
        normalScale: new THREE.Vector2(0.15,0.15),
        envMap:envmap.texture
      }
    
      let ballGeo = new THREE.SphereGeometry(100,100,100)
      let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial)
      let ballMesh = new THREE.Mesh(ballGeo,ballMat)
      scene.add(ballMesh)
      animate()
    }
  );
}


function animate(){
  controls.update();
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}

init();
