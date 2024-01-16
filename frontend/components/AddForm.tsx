import { useState } from "react";

const AddForm = ({ onAdd }) => {
  const [description, setDescription] = useState("");

  function addInputText(e) {
    e.preventDefault()
    if (!description) {
      alert("Enter text in the input block")
      return
    }
    onAdd({description})
    setDescription("")
  }

  return (
    <div>
      <h1>Add Items</h1>
      <form onSubmit={addInputText}>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={addInputText}>Add item</button>
      </form>
    </div>
  );
};

export default AddForm;
