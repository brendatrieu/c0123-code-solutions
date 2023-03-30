import React, { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 */
export default function Container({ items }) {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <div>{items[current]}</div>
      <div>
        <Button
          text="Prev"
          onClick={() => setCurrent(((current - 1) + items.length) % items.length)}
          current={current}
        />
        <Buttons
          count={items.length}
          onClick={(i) => setCurrent(i)}
          current={current}
        />
        <Button
          text="Next"
          onClick={() => setCurrent(((current + 1) + items.length) % items.length)}
          current={current}
        />
      </div>
    </div>
  );
}

/**
 * A button that toggles its color between white and lightblue.
 */
function Button({ text, onClick, current }) {
  return <button onClick={onClick} style={{ backgroundColor: current === text ? "lightblue" : "white" }}>{text}</button>;
}

/**
 * An array of buttons.
 */
function Buttons({ count, current, onClick }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <Button
        key={i}
        text={i}
        onClick={() => onClick(i)}
        current={current}
      />)
  }
  return <div>{buttons}</div>;
}
