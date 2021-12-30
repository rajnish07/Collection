import DrumPad from "./DrumPad";

function PadBank(props){
    let padBank;
    if (props.power) {
      padBank = props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumPad
            clip={padBankArr[i].url}
            clipId={padBankArr[i].id}
            keyCode={padBankArr[i].keyCode}
            keyTrigger={padBankArr[i].keyTrigger}
            power={props.power}
            updateDisplay={props.updateDisplay}
            key={padBankArr[i].id}
          />
        );
      });
    } else {
      padBank = props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumPad
            clip='#'
            clipId={padBankArr[i].id}
            keyCode={padBankArr[i].keyCode}
            keyTrigger={padBankArr[i].keyTrigger}
            power={props.power}
            updateDisplay={props.updateDisplay}
            key={padBankArr[i].id}
          />
        );
      });
    }
  return <div className="drum-wrapper">{padBank}</div>;
}

export default PadBank;