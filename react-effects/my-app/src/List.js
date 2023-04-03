/* eslint-disable no-unused-vars -- REMOVE ME */
import { useEffect, useState } from 'react';
import readItems from './read';

export default function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`
  function cleanUp () {
    setIsLoading(true);
    setItems([]);
    setError(null);
  }

  useEffect(() => {
    async function retrieveResponse() {
      try{
        const response = await readItems();
        setItems(response);
        setIsLoading(false);
      } catch (err){
        setError(err);
      }
    }
    retrieveResponse();
    return () => cleanUp();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul>
      {items.map((item) => <li key={item.id}>{item.id}: {item.name}</li>)}
    </ul>
  );
}
