import CustomButton from './CustomButton';
import './App.css';

function App() {
  function handleCustomClick(text) {
    alert(text);
  }
  return (
    <>
    <CustomButton color="blue" text="Hello" onCustomClick={handleCustomClick} />
      <CustomButton color="green" text="World" onCustomClick={handleCustomClick} />
      <CustomButton color="purple" text="Farewell" onCustomClick={handleCustomClick} />
    </>
  );
}

export default App;
