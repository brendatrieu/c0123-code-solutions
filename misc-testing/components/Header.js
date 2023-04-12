import './Header.css';

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {/* TODO: Make these links to About and Catalog, with className "title" */}
            <li className="nav-item nav-link">About</li>
            <li className="nav-item nav-link">Catalog</li>
          </ul>
        </div>
      </nav>
      {/* Render the Outlet here. */}
    </div>
  );
}
