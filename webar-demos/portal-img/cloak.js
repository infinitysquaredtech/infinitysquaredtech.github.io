AFRAME.registerComponent('cloak', {
  init: function() {
    let geometry = new THREE.BoxGeometry(1.15, 1.15, 2)
    geometry.faces.splice(4, 2)
     let material = new THREE.MeshBasicMaterial({
        colorWrite: false
     })
     let mesh = new THREE.Mesh(geometry, material)
     this.el.object3D.add(mesh)
  }
})

AFRAME.registerComponent("bottle-mod", {
  init: function() {
    var targetCube = new THREE.WebGLCubeRenderTarget(512);
    var renderer = this.el.sceneEl.renderer;

    this.el.addEventListener("model-loaded", e => {
      let mesh = this.el.getObject3D("mesh");
      
      var texture = new THREE.TextureLoader().load(
        "https://cdn.glitch.global/62a13213-a377-46d0-b165-d649252152ec/sky.jpg?v=1669205789893",
        function() {
          var cubeTex = targetCube.fromEquirectangularTexture(renderer, texture);
          mesh.traverse(function(el) {
            if (el.material) {
              el.material.envMap = cubeTex.texture;
              el.material.envMapIntensity = 4;
              el.material.needsUpdate = true;
            }
          });crossorigin="anonymous"
          // renderer.toneMapping = THREE.ACESFilmicToneMapping;
          // renderer.outputEncoding = THREE.sRGBEncoding;
        }
      );
    });
  }
});

