/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import User from './User';
import UserCard from './UserCard';
import './Users.css';

export default function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error(`Status: ${response.status}`);
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err);
        console.error('An error occurred during fetch.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, [])

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }
  return (
    <div className="container">
      <UserList users={users} onClick={(user) => setUser(user)} />
      {user && <User userId={user.id} onCancel={() => setUser(undefined)} />}
    </div>
    );
}

function UserList({ users, onClick }) {
  return (
    <ul>
      {users.map((user) =>
        <li key={user.id}>
          <UserCard  user={user} onClick={onClick} />
        </li>
      )}
    </ul>
  );
}
