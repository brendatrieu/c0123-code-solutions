
import { FaHamburger } from 'react-icons/fa';
import './AppDrawer.css';

/**
 * AppDrawer is a hamburger menu component that toggles open and closed,
 * and contains any number of pages.
 * @param {heading} Represents name of menu.
 * @param {items} An array containing pages listed within the menu.
 */

export default function AppDrawer({heading, items, onTitleChange, onMenuToggle, view}) {

  return (
    <div style={{position: 'absolute'}}>
      {(view === 'main') && <FaHamburger className="hamburger-icon" onClick={onMenuToggle}/>}
      <DrawerItems heading={heading}
        items={items}
        view={view}
        onMenuToggle={onMenuToggle}
        onTitleChange={onTitleChange}
      />
    </div>
  )
}

function DrawerItems({heading, items, view, onMenuToggle, onTitleChange}) {
  function handleClick(item) {
    onTitleChange(item);
    onMenuToggle();
  }
  return (
    <div className={view !== 'main' ? 'menu' : 'hidden'}>
      <h2>{heading}</h2>
      <ul className="menu-list">
        {items.map((item) => <li className="menu-item" onClick={() => handleClick(item)}>{item}</li>)}
      </ul>
    </div>
  )
}
