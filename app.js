const getBlackKeys = document.querySelector("#blackKeysContainer");
const getWhiteKeys = document.querySelector("#whiteKeysContainer");

const blackPianoKeys = 13;
const whitePianoKeys = 14;

const blackKeys = [];
const whiteKeys = [];

const playPianoKey = (newKey) => {
  new Audio(newKey).play();
};

const addBlackKeys = () => {
  // Making all the black keys
  for (let i = 0; i < blackPianoKeys; i++) {
    const blackKey = document.createElement("button");

    // Finding the keys to become transparent (To make the gap between the keys to look like piano)
    if (i === 2 || i === 6 || i === 9) {
      blackKey.classList.add("transparent-btn");
    } else {
      blackKey.classList.add("black-keys-hover");
    }

    blackKey.classList.add("black-keys");
    getBlackKeys.appendChild(blackKey);

    blackKeys.push(blackKey);
  }

  // Making eventlistener to all the black keys except the transparent ones
  blackKeys.forEach((key, i) => {
    const transparentBtns = [2, 6, 9].map((x) => blackKeys[x]); // Using map to make a new array with the transparent keys

    if (
      key === transparentBtns[0] ||
      key === transparentBtns[1] ||
      key === transparentBtns[2]
    ) {
      return;
    }
    const newKey = `./pianoKeys/key-black${i}.mp3`;
    key.addEventListener("click", () => playPianoKey(newKey));
  });
};

const addWhiteKeys = () => {
  // Making all the white keys
  for (let i = 0; i < whitePianoKeys; i++) {
    const whiteKey = document.createElement("button");
    whiteKey.classList.add("white-keys");
    getWhiteKeys.appendChild(whiteKey);

    whiteKeys.push(whiteKey);
  }

  // Making eventlistener to white keys
  whiteKeys.forEach((key, i) => {
    const newKey = `./pianoKeys/key-white${i}.mp3`;
    key.addEventListener("click", () => playPianoKey(newKey));
  });
};

addBlackKeys();
addWhiteKeys();
