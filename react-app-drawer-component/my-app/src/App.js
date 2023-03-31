import AppDrawer from './AppDrawer';
import './App.css';
import { useState } from 'react';

const items = ['About', 'Get Started', 'Sign In'];

function App() {
  const [title, setTitle] = useState('');

  return (
    <div>
      <AppDrawer items={items} heading="Menu" onSwitch={(item) => setTitle(item)} />
      <header className="App-header">
        {title}
      </header>
    </div>
  );
}

export default App;
