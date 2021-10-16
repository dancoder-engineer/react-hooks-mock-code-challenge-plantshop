import React, {useEffect, useState} from "react";

function NewPlantForm({handleAdd}) {

  let [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleFormChange(e){
    setFormData({...formData, [e.target.name]: e.target.value
    })
  }

  function addPrep(e){
    e.preventDefault()
    handleAdd(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => handleFormChange(e)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => handleFormChange(e)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => handleFormChange(e)}/>
        <button type="submit" onClick={e => addPrep(e)}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
