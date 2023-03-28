import './App.css';
import CustomButtonStyle from './CustomButton';
import {CustomButtonCSS} from './CustomButton';

function App() {
  return (
    <>
    <CustomButtonStyle text="I" color="turquoise"/>
    <CustomButtonStyle text="know" color="pink"/>
    <CustomButtonStyle text="React!" color="coral"/>
    <br />
    <CustomButtonCSS text="I" color="light-blue" />
    <CustomButtonCSS text="know" color="green" />
    <CustomButtonCSS text="React!" color="cyan" />
    </>
  );
}

export default App;
