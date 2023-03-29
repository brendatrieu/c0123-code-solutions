import { useState } from 'react';

export default function RegistrationFormUncontrolled() {
  const [un, setUn] = useState("");
  const [pw, setPw] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({un, pw})
  }
  return (
    <>
      <form id="controlled-form">
        <label>
          Username: <input name="username" type="text" value={un} onChange={(e) => setUn(e.target.value)}/>
        </label>
        <label>
          Password: <input name="password" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}
