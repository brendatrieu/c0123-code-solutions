/* eslint-disable no-unused-vars -- REMOVE ME */
import { useEffect, useState } from 'react';
import readItems from './read';

export default function List() {
  const [isLoading, setIsLoading] = useState();
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function retrieveResponse() {
      try{
        const response = await readItems();
        setItems(response);
      } catch (err){
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (isLoading === undefined) {
      setIsLoading(true);
      retrieveResponse();
    }
  }, [isLoading]);

  if (isLoading || isLoading === undefined) {
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
