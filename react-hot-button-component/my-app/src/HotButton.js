import { useState } from 'react';

export default function HotButton () {
  const allColors = ['#000000', '#351C74', '#674DA7', '#E06666', '#F6B26A', '#FEFF00', '#FFFFFF'];
  let [numClicks, setNumClicks] = useState(0);
  const bgColor = (numClicks % 3 === 0) ? allColors[numClicks/3] : allColors[Math.floor(numClicks / 3)];
  let fontColor = (allColors.indexOf(bgColor) < 4) ? "white" : "black";
  return (
    <button style={{color: fontColor, backgroundColor: bgColor}}
      onClick={() => setNumClicks(numClicks !== 20 ? numClicks + 1 : numClicks = 0)} >
        Hot Button
    </button>
  )
}
