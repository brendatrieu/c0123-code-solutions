import { useState } from 'react';

export default function RegistrationFormUncontrolled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ username, password })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <label>
        Password: <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
