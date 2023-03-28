export default function CustomButton({text, color, onCustomClick}) {
  function handleClick() {
    onCustomClick(text);
  }
  return (
    <button style={{backgroundColor: color}} onClick={handleClick}>
      {text}
    </button>
  )
}
