import {useState} from 'react';

export default function ToggleButton({text, color}) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState', isClicked);
  return (
    <button style={isClicked ? { backgroundColor: color } : { backgroundColor: "white" }}
    onClick={() => {
      console.log('isClicked before setter', isClicked);
      setIsClicked(!isClicked);
      console.log('isClicked after setter', isClicked);
    }}>
      {text}
    </button>
  );
};
