const CustomInput = ({buttonText, onClick, onChange, value}) => {
  return (
    <div>
      <h1>Task List</h1>
      <div>
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)}/>
        <button onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  )
}

export default CustomInput;