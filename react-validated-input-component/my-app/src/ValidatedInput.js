import { useState } from 'react';

export default function ValidatedInput() {
  const [pw, setPw] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [err, setErr] = useState([]);

  function validate(e) {
    const allReqs = /(?=.*[!@#$%^&*()])(?=.*\d)(?=.*[A-Z]).*/;
    const typedPw = e.target.value;
    const check = allReqs.test(typedPw) && (typedPw.length > 7);

    setIsValid(check);
    setPw(typedPw);
    const message = msgGenerator(typedPw);
    setErr(message);
  }

  const invalid = "fa-sharp fa-solid fa-xmark";
  const valid = "fa-sharp fa-solid fa-check";
  const msgStyle = { margin: "10px", color: "red" };

  return (
    <>
      <form style={{ margin: "10px" }}>
        <label htmlFor="password" style={{display: "block"}}>
          Password
        </label>
        <input name="password" type="password" value={pw} onChange={(e) => validate(e)} />
        { (err.length > 0 || isValid) && <i style={{ margin: "10px", color: isValid ? "green" : "red" }} className={isValid ? valid : invalid} />}
      </form>
      {err.map((errorMessage) => <p key={errorMessage} style={msgStyle}>{errorMessage}</p>)}
    </>
  )
}

function msgGenerator (typedPw) {
  const message = [];
  // --- Password Required ---
  const reqPw = 'Password is a required field.';
  if (typedPw.length === 0) {
    message.push(reqPw);
    return message;
  }
  // --- Min 8 Characters ---
  const noEightChar = 'Password must be at least 8 characters long.';
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
  return message;
}
