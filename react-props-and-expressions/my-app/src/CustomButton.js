import './CustomButton.css';

export default function CustomButtonStyle({text, color}) {
  return (
    <button style={{"background-color": color}} type="button">{text}</button>
  )
}

export function CustomButtonCSS({ text, color }) {
  return (
    <button className={color} type="button">{text}</button>
  )
}
