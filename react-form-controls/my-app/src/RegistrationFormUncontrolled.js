export default function RegistrationFormUncontrolled () {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()))
  }
  return (
    <form id="uncontrolled-form" onSubmit={handleSubmit}>
      <label>
        Username: <input name="username" type="text" />
      </label>
      <label>
        Password: <input name="password" type="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
