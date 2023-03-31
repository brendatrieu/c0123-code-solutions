import AppDrawer from './AppDrawer';
import './App.css';
import { useState } from 'react';

const items = ['About', 'Get Started', 'Sign In'];

function App() {
  const [title, setTitle] = useState('');
  const [view, setView] = useState('main');
  const overlay = (view === 'main') ?
    { backgroundColor: 'rgba(255, 255, 255, 0)', pointerEvents: 'none' } :
    { backgroundColor:'rgba(255, 255, 255, 0.25)', pointerEvents:'all' };

  function toggleMenu() {
    setView(view === 'main' ? '' : 'main');
  }

  return (
    <div>
      <AppDrawer view={view}
        items={items}
        heading="Menu"
        onTitleChange={(item) => setTitle(item)}
        onMenuToggle={toggleMenu} />
      <div style={overlay}
        className="overlay"
        onClick={() => view!=='main' && toggleMenu()}>
      </div>
      <header className="App-header">
        {title}
        <a href="google.com">Google</a>
      </header>

    </div>
  );
}

export default App;
