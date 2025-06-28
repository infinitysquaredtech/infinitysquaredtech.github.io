document.addEventListener("DOMContentLoaded", function() {
	const sceneEl = document.querySelector('a-scene');
	const arSystem = sceneEl.systems["mindar-image-system"];
  const target1 = document.querySelector('#target1');
  const target2 = document.querySelector('#target2');
  const target3 = document.querySelector('#target3');
  const target4 = document.querySelector('#target4');
  
  document.querySelector("#avatar1").setAttribute("position", "0.3 -0.3 -0.6");
  document.querySelector("#avatar2").setAttribute("position", "-2.2 3.0 -0.6");
  document.querySelector("#avatar3").setAttribute("position", "0 0 -0.6");
  document.querySelector("#avatar4").setAttribute("position", "0 0 -0.6");
  
  var tar1_visible = false;
  var tar2_visible = false;
  var tar3_visible = false;
  var tar4_visible = false;
  
	// const exampleTarget = document.querySelector('#animated-target');
	// const startButton = document.querySelector("#example-start-button");
	// const stopButton = document.querySelector("#example-stop-button");
	// const pauseButton = document.querySelector("#example-pause-button");
	// const pauseKeepVideoButton = document.querySelector("#example-pause-keep-video-button");
	// const unpauseButton = document.querySelector("#example-unpause-button");
	// startButton.addEventListener('click', () => {
	//   console.log("start");
	//   arSystem.start(); // start AR 
	// });
	// stopButton.addEventListener('click', () => {
	//   arSystem.stop(); // stop AR 
	// });
	// pauseButton.addEventListener('click', () => {
	//   arSystem.pause(); // pause AR, keep video feed
	// });
	// pauseKeepVideoButton.addEventListener('click', () => {
	//   arSystem.pause(true); // pause AR and video
	// });
	// unpauseButton.addEventListener('click', () => {
	//   arSystem.unpause(); // unpause AR and video
	// });
  
	// arReady event triggered when ready
	sceneEl.addEventListener("arReady", (event) => {
	  console.log("MindAR is ready")
	});
  
	// arError event triggered when something went wrong. Mostly browser compatbility issue
	sceneEl.addEventListener("arError", (event) => {
	  console.log("MindAR failed to start")
	});
  
	//detect target1 found
	target1.addEventListener("targetFound", event => {
    const avatar = document.querySelector("#avatar1");
    // avatar.setAttribute("position", "0.3 -0.3 -0.6");
    if(tar1_visible == false){
      let z = -0.6;
      const id = setInterval(() => {
        z += 0.005;
        if (z >= 0) {
          clearInterval(id);
          tar1_visible = true;
        }
        avatar.setAttribute("position", "0.3 -0.3 " + z);
      }, 10);
    }
	  // console.log("target 1 found");
	});
  
  //detect target2 found
	target2.addEventListener("targetFound", event => {
    const avatar = document.querySelector("#avatar2");
    if(tar2_visible == false){
      let z = -0.6;
      const id = setInterval(() => {
        z += 0.005;
        if (z >= 0) {
          clearInterval(id);
          tar2_visible = true;
        }
        avatar.setAttribute("position", "-2.2 3.0 " + z);
      }, 10);
    }
	  // console.log("target 2 found");
	});
  
  //detect target3 found
	target3.addEventListener("targetFound", event => {
    const avatar = document.querySelector("#avatar3");
    if(tar3_visible == false){
      let z = -0.6;
      const id = setInterval(() => {
        z += 0.005;
        if (z >= 0) {
          clearInterval(id);
          tar3_visible = true;
        }
        avatar.setAttribute("position", "0 0 " + z);
      }, 10);
    }
	  // console.log("target 3 found");
	});
  
  //detect target4 found
	target4.addEventListener("targetFound", event => {
    const avatar = document.querySelector("#avatar4");
    if(tar4_visible == false){
      let z = -0.6;
      const id = setInterval(() => {
        z += 0.005;
        if (z >= 0) {
          clearInterval(id);
          tar4_visible = true;
        }
        avatar.setAttribute("position", "0 0 " + z);
      }, 10);
    }
	  // console.log("target 4 found");
	});
  
	// // detect target lost
	// target1.addEventListener("targetLost", event => {
	// const avatar = document.querySelector("#avatar1");
	// avatar.setAttribute("position", "0.3 -0.3 -0.6")
	//   console.log("target lost");
	// });
	// target2.addEventListener("targetLost", event => {
	// const avatar = document.querySelector("#avatar2");
	// avatar.setAttribute("position", "-2.2 3.0 -0.6")
	//   console.log("target lost");
	// });
	// target3.addEventListener("targetLost", event => {
	// const avatar = document.querySelector("#avatar3");
	// avatar.setAttribute("position", "0 0 -0.6")
	//   console.log("target lost");
	// });
	// target4.addEventListener("targetLost", event => {
	// const avatar = document.querySelector("#avatar4");
	// avatar.setAttribute("position", "0 0 -0.6")
	//   console.log("target lost");
	// });
});