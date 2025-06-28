function openInNewTab(url) {
  const win = window.open(url, '_blank');
  win.focus();
}

document.addEventListener("DOMContentLoaded", function() {
	const exampleModel = document.querySelector('#animated-model');
	const examplePlane1 = document.querySelector('#example-plane1');
	const examplePlane2 = document.querySelector('#example-plane2');
	const examplePlane3 = document.querySelector('#example-plane3');
	const examplePlane4 = document.querySelector('#example-plane4');
	const examplePlaneBack = document.querySelector('#example-plane-back');
  const examplePlaneBuy = document.querySelector('#example-plane-buy');
	const header = document.querySelector('#header-title');

	// detect click event
	examplePlaneBack.addEventListener("click", event => {
	  // console.log("back button click");
	  exampleModel.setAttribute("src", "false")
	  exampleModel.removeAttribute("animation")
	  examplePlaneBack.setAttribute("visible", "false")
    examplePlaneBuy.setAttribute("visible", "false")
	  examplePlane1.setAttribute("visible", "true")
	  examplePlane2.setAttribute("visible", "true")
	  examplePlane3.setAttribute("visible", "true")
	  examplePlane4.setAttribute("visible", "true")
	  header.setAttribute("visible", "true")

	  examplePlane1.setAttribute("scale", "1 1 1 ")
	  examplePlane2.setAttribute("scale", "1 1 1 ")
	  examplePlane3.setAttribute("scale", "1 1 1 ")
	  examplePlane4.setAttribute("scale", "1 1 1 ")
	});
  
  // detect click event
	examplePlaneBuy.addEventListener("click", event => {
	  // console.log("back button click");
	  openInNewTab('https://www.amazon.com/DJI-controller-Triple-Camera-Transmission-photography/dp/B0BYHSDY4C')
	});
  
	// detect click event
	examplePlane1.addEventListener("click", event => {
	  // console.log("button 1 click");
	  exampleModel.setAttribute("src", "https://cdn.glitch.global/96c9bc3c-059f-44a8-ac06-bb97959d205b/veribot.glb?v=1666761605021")
	  exampleModel.setAttribute("position", "0 -0.7 0.5")
	  exampleModel.setAttribute("scale", "0 0 0")
	  exampleModel.setAttribute("rotation", "0 90 0")
	  examplePlaneBack.setAttribute("visible", "true")
    examplePlaneBuy.setAttribute("visible", "true")
	  header.setAttribute("visible", "false")
	  // examplePlane1.setAttribute("visible", "false")
	  examplePlane2.setAttribute("scale", "0 0 0")
	  examplePlane3.setAttribute("scale", "0 0 0")
	  examplePlane4.setAttribute("scale", "0 0 0")

	  exampleModel.setAttribute("animation", "property: scale; to: 0.8 0.8 0.8; dur: 1000; delay: 500")
	});

	// detect click event
	examplePlane2.addEventListener("click", event => {
	  // console.log("button 2 click");
	  exampleModel.setAttribute("src", "https://cdn.glitch.global/96c9bc3c-059f-44a8-ac06-bb97959d205b/mech_drone.glb?v=1666959307012")
	  exampleModel.setAttribute("position", "0 -0.8 0.5")
	  exampleModel.setAttribute("scale", "0 0 0")
	  exampleModel.setAttribute("rotation", "0 180 0")
	  examplePlaneBack.setAttribute("visible", "true")
    examplePlaneBuy.setAttribute("visible", "true")
	  header.setAttribute("visible", "false")
	  examplePlane1.setAttribute("scale", "0 0 0")
	  // examplePlane2.setAttribute("visible", "false")
	  examplePlane3.setAttribute("scale", "0 0 0")
	  examplePlane4.setAttribute("scale", "0 0 0")

	  exampleModel.setAttribute("animation", "property: scale; to: 3.5 3.5 3.5; dur: 1000; delay: 500")
	});

	// detect click event
	examplePlane3.addEventListener("click", event => {
	  // console.log("button 3 click");
	  exampleModel.setAttribute("src", "https://cdn.glitch.global/96c9bc3c-059f-44a8-ac06-bb97959d205b/police_drone.glb?v=1666959321441")
	  exampleModel.setAttribute("position", "0 0 0.5")
	  exampleModel.setAttribute("scale", "0 0 0")
	  exampleModel.setAttribute("rotation", "0 135 0")
	  examplePlaneBack.setAttribute("visible", "true")
    examplePlaneBuy.setAttribute("visible", "true")
	  header.setAttribute("visible", "false")
	  examplePlane1.setAttribute("scale", "0 0 0")
	  examplePlane2.setAttribute("scale", "0 0 0")
	  // examplePlane3.setAttribute("visible", "false")
	  examplePlane4.setAttribute("scale", "0 0 0")

	  exampleModel.setAttribute("animation", "property: scale; to: 0.01 0.01 0.01; dur: 1000; delay: 500")
	});

	// detect click event
	examplePlane4.addEventListener("click", event => {
	  // console.log("button 4 click");
	  exampleModel.setAttribute("src", "https://cdn.glitch.global/96c9bc3c-059f-44a8-ac06-bb97959d205b/s9_mini_drone.glb?v=1666959311290")
	  exampleModel.setAttribute("position", "0 0 0.5")
	  exampleModel.setAttribute("scale", "0 0 0")
	  exampleModel.setAttribute("rotation", "0 0 0")
	  examplePlaneBack.setAttribute("visible", "true")
    examplePlaneBuy.setAttribute("visible", "true")
	  header.setAttribute("visible", "false")
	  examplePlane1.setAttribute("scale", "0 0 0")
	  examplePlane2.setAttribute("scale", "0 0 0")
	  examplePlane3.setAttribute("scale", "0 0 0")
	  // examplePlane4.setAttribute("visible", "false")

	  exampleModel.setAttribute("animation", "property: scale; to: 0.2 0.2 0.2; dur: 1000; delay: 500")
	});  
  
});