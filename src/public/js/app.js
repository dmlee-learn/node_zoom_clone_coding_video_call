const socket = io();
const myFace = document.querySelector('#myFace');
const muteBtn = document.querySelector('#mute');
const cameraBtn = document.querySelector('#camera');

let myStream;

async function getMedia() {
  try {
    /*
    myStream = await navigator.mediaDevices.getUserMedia({
      auto: true,
      video: true,
    });
    myFace.srcObject = myStream;
    console.log(myStream);
    */
  } catch (e) {
    console.log(e);
  }
}
getMedia();


let muted = false;
function handleMuteBtnClick() {
  if (!muted) {
    muteBtn.innerText = 'Mute';
    muted = false;
  } else {
    muteBtn.innerText = 'Unmute';
    muted = true;
  }
}
muteBtn.addEventListener('click', handleMuteBtnClick);

let cameraOff = false;
function handleCameraBtnClick() {
  if (cameraOff) {
    cameraBtn.innerText = 'Turn Camera OFF';
    cameraOff = false;
  } else {
    cameraBtn.innerText = 'Turn Camera ON';
    cameraOff = true;
  }
}
cameraBtn.addEventListener('click', handleCameraBtnClick);