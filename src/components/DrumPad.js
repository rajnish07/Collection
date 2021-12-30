import { useState, useEffect } from "react";

const activeStyle = {
  backgroundColor: "orange",
  boxShadow: "0 3px orange",
  height: 77,
  marginTop: 13,
};

const inactiveStyle = {
  backgroundColor: "#333",
  marginTop: 10,
  boxShadow: "3px 3px 5px black",
};

function DrumPad(props) {
  const [padStyle, setPadStyle] = useState(inactiveStyle);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (e) => {
    if (e.keyCode === props.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const sound = document.getElementById(props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    activatePad();
    setTimeout(() => activatePad(), 100);
    props.updateDisplay(props.clipId.replace(/-/g, " "));
  };

  const activatePad = () => {
    if (props.power) {
      if (padStyle.backgroundColor === "orange") {
        setPadStyle(inactiveStyle);
      } else {
        setPadStyle(activeStyle);
      }
    } else if (padStyle.marginTop === 13) {
      setPadStyle(inactiveStyle);
    } else {
      setPadStyle({
        height: 77,
        marginTop: 13,
        backgroundColor: "grey",
        boxShadow: "0 3px grey",
      });
    }
  };

  return (
    <div
      className="drum-pad"
      id={props.clipId}
      onClick={playSound}
      style={padStyle}
    >
      <audio className="clip" id={props.keyTrigger} src={props.clip} />
      {props.keyTrigger}
    </div>
  );
}

export default DrumPad;
