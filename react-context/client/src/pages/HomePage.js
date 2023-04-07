/* eslint-disable no-unused-vars -- Remove me */
/* eslint-disable no-undef -- Remove me */
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../components/AppContext';
import './HomePage.css';

export default function Home() {
  const {user} = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/sign-in');
  }, [user, navigate])

  return (
    <div className="gif-container">
      <iframe
        title="Rick Roll"
        src="https://giphy.com/embed/Ju7l5y9osyymQ"
        width="100%"
        height="100%"
        frameBorder="0"
        className="gif" />
    </div>
  );
}
