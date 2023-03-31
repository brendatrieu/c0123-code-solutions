import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import './AppDrawer.css';

/**
 * AppDrawer is a hamburger menu component that toggles open and closed,
 * and contains any number of pages.
 * @param {heading} Represents name of menu.
 * @param {items} An array containing pages listed within the menu.
 */

export default function AppDrawer({heading, items, onSwitch}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && <FaHamburger className="hamburger-icon" onClick={() => setIsOpen(true)}/>}
      <div className={isOpen && "menu"}>
        <h2>{heading}</h2>
        <ul>
          {items.map((item) => <li onClick={() => onSwitch(item)}>{item}</li>)}
        </ul>
      </div>
    </>
  )
}
