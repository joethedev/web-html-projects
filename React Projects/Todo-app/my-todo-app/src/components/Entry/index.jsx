import "../Entry/index.css";
const Entry = ({
  entryName,
  id,
  buttonText,
  handleDelete,
  onClick,
  clicked,
  taskKey,
  onChange,
}) => {
  return (
    <div className="tasks">
      {clicked === true & id === taskKey ? (
        <input type="text" value={entryName} onChange={(e)=>onChange(e.target.value)} />
      ) : (
        <p className="entryText" id={id} onClick={(e) => onClick(e)}>
          {entryName}
        </p>
      )}

      <button
        className={clicked === true ? "save" : "delete"}
        onClick={() => handleDelete(id)}
      >
        {clicked === true ? "Save" : buttonText}
      </button>
    </div>
  );
};
Entry.defaultProps = {
  buttonText: "Delete",
};
export default Entry;
