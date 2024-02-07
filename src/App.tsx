import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Are you really really sure?",
  "100% certain??",
  "Why not",
  "I made this whole website just for u to click no",
  "6 times already now",
  "Alright",
  "I SEE HOW IT IS",
  "STOP PRESSING ME",
  "JUST PRESS YES",
  "Oh cmonnn",
  "Megannn",
  "Pleaseee",
  "Pretty pretty pleaseee",
  "I even asked nicely 😑",
  "Press no if u like me",
  "HAH, tricked u",
  "Got u there :)",
  "URE SO MEAN",
  "OKAY FINE I GIVE UP",
  "BYE",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 15 + 25;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img alt="meganAndMe" src="https://pouch.jumpshare.com/preview/x1EZJ3F0Kl-I4OfKFolFBv0fawtVlIB8iyw0DJiPRlMV8avuL8QiuUigY27kUiwpzltI8nQqBBdqSsc46X9G7xAXAa6gslH56XvCCV9vTEk" />
          <div className="text">
            Yay!🤍 (u better have pressed yes the first time...)
          </div>
        </>
      ) : (
        <>
          <img alt="meganAndMe2" src="https://pouch.jumpshare.com/preview/Kb4nEftPGG-PChhNIWLRZ2ajSJ9QbW5W4Cb1RTBY3BYxvyPAgO0j3y1bzlMxu954zltI8nQqBBdqSsc46X9G70LHCAWXX2GKIOu6kvtTSXg" />

          <div className="question">
            Hi Megan, will you be my valentine?
            <div>
              <button
                className="yesButton"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button onClick={handleNoClick} className="noButton">
                {getNoButtonText()}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
