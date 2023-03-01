import "../CustomInput/index.css";

const CustomInput = ({ buttonText, handleAdd, onChange, value }) => {
  return (
    <div className="custominput">
      <input
        className="taskVal"
        type="text"
        id="entryId"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="addButton" onClick={() => handleAdd()}>
        {buttonText}
      </button>
    </div>
  );
};

export default CustomInput;
