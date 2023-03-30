import { useState } from 'react';

export default function ValidatedInput() {
  const [pw, setPw] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [err, setErr] = useState([]);

  function validate(e) {
    const allReqs = /(?=.*[!@#$%^&*()])(?=.*\d)(?=.*[A-Z]).*/;
    const typedPw = e.target.value;
    const check = allReqs.test(typedPw) && (typedPw.length > 7);

    setIsValid(check);
    setPw(typedPw);
    setAttempted(true);

    if (!check) {
      const msgStyle = { margin: "10px", color: "red" };
      if (attempted && typedPw.length === 0) {
        return setErr(<p style={msgStyle}>Password is a required field.</p>);
      }
      let message = [];
      // --- Min 8 Characters ---
      const noEightChar = 'Password must be at least 8 characters long.';
      // debugger;
      (typedPw.length < 8) ? message.push(noEightChar) : message.filter((msg) => msg !== noEightChar);
      // --- Special Characters ---
      const specChar = /[!@#$%^&*()]/;
      const noSpecChar = 'Password must include at least one special character (!, @, #, $, %, ^, &, *, (, or ) )';
      !specChar.test(typedPw) ? message.push(noSpecChar) : message.filter((msg) => msg !== noSpecChar);
      // --- Digits ---
      const digit = /\d/;
      const noDigit = 'Password must include at least one digit.';
      !digit.test(typedPw) ? message.push(noDigit) : message.filter((msg) => msg !== noDigit);
      // --- Uppercase ---
      const upper = /[A-Z]/;
      const noUpper = 'Password must include at least one uppercase letter.';
      !upper.test(typedPw) ? message.push(noUpper) : message.filter((msg) => msg !== noUpper);
      setErr(message.map((errorMessage) => <p key={errorMessage} style={msgStyle}>{errorMessage}</p>));
    }
  }
  const invalid = "fa-sharp fa-solid fa-xmark";
  const valid = "fa-sharp fa-solid fa-check";

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      <form style={{ margin: "10px" }}>
        <label htmlFor="password" style={{display: "block"}}>
          Password
        </label>
        <input name="password" type="password" value={pw} onChange={(e) => validate(e)} />
        { attempted && <i style={{ margin: "10px", color: isValid ? "green" : "red" }} className={isValid ? valid : invalid} />}
      </form>
      {err}
    </>
  )
}
