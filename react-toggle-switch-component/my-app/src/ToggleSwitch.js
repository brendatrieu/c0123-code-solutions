import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [isClicked, setIsClicked] = useState(false);
  const on = {
    backgroundColor: "#69A84F",
    justifyContent: "flex-end"
  };
  const off = {
    backgroundColor: "#E2E2E2",
    justifyContent: "flex-start"
  };
  const styleState = isClicked ? on : off;

  return (
    <>
      <div className="switch-div" style={styleState}>
        <button className="switch-button"
          onClick={() => setIsClicked(!isClicked)}>
          </button>
      </div>
      <p className="switch-label">
        {isClicked ? "ON" : "OFF"}
      </p>
    </>
  )

}
