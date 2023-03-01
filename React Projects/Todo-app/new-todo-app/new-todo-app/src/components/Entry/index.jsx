const Entry = ({entryText, entryButton, key, onClick}) => {
  return (
    <div>
      <p id={key}>{entryText}</p>
      <button onClick={(key) =>onClick()}>{entryButton}</button>
    </div>
  )
}

export default Entry;