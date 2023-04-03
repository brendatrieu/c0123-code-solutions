import Carousel from './Carousel';
import './App.css';

const images = [
  {url: 'https://images.unsplash.com/photo-1562310503-a918c4c61e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'Mirror Lake during summer.'},
  {url: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'River leading to El Capitan at sunset.'},
  {url: 'https://images.unsplash.com/photo-1597462263257-0f43270bdd6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    alt: 'Aerial view of Half Dome at sunset.'},
  {url: 'https://images.unsplash.com/photo-1520273288003-a449a25c5103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'Calm river leading to Half dome in the winter.'},
  {url: 'https://images.unsplash.com/photo-1502582877126-512f3c5b0a64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    alt: 'Stars in the night sky overlooking Yosemite.'}
  ];

function App() {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
}

export default App;
