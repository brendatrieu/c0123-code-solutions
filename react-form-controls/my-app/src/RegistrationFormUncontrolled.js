export default function RegistrationFormUncontrolled () {
  function handleSubmit(e) {
    e.preventDefault();
    const $form = document.querySelector('#uncontrolled-form');
    const formData = new FormData($form);
    console.log(Object.fromEntries(formData.entries()))
  }
  return (
    <>
      <form id="uncontrolled-form">
        <label>
          Username: <input name="username" type="text" />
        </label>
        <label>
          Password: <input name="password" type="password" />
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}
