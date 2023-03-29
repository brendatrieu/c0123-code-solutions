import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';
import './App.css';

function App() {
  return (
    <>
      <strong>Uncontrolled Form:</strong>
      <RegistrationFormUncontrolled />
      <strong>Controlled Form:</strong>
      <RegistrationFormControlled />
    </>
  );
}

export default App;
