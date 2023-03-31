import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import './AppDrawer.css';

/**
 * AppDrawer is a hamburger menu component that toggles open and closed,
 * and contains any number of pages.
 * @param {heading} Represents name of menu.
 * @param {items} An array containing pages listed within the menu.
 */

export default function AppDrawer({heading, items, onTitleChange}) {
  const [isOpen, setIsOpen] = useState(false);
  const overlay = (!isOpen) ?
    { backgroundColor: 'rgba(255, 255, 255, 0)', pointerEvents: 'none' } :
    { backgroundColor: 'rgba(255, 255, 255, 0.25)', pointerEvents: 'all' };
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div style={{position: 'absolute'}}>
        {(!isOpen) && <FaHamburger className="hamburger-icon" onClick={toggleMenu}/>}
        <DrawerItems heading={heading}
          items={items}
          isOpen={isOpen}
          onMenuToggle={toggleMenu}
          onTitleChange={onTitleChange}
        />
      </div>
      <div style={overlay}
          className="overlay"
          onClick={() => isOpen && toggleMenu()}>
      </div>
    </>
  )
}

function DrawerItems({heading, items, isOpen, onMenuToggle, onTitleChange}) {
  function handleClick(item) {
    onTitleChange(item);
    onMenuToggle();
  }
  return (
    <div className={isOpen ? 'menu' : 'hidden'}>
      <h2>{heading}</h2>
      <ul className="menu-list">
        {items.map((item) => <li key={item} className="menu-item" onClick={() => handleClick(item)}>{item}</li>)}
      </ul>
    </div>
  )
}
