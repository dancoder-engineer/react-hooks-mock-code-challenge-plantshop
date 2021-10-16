import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useEffect, useState } from "react";

function App() {

  const url="http://localhost:6001/plants"

  let[plants, setPlants] = useState([])
  let[masterPlants, setMasterPlants] = useState([])



useEffect(() => {

    fetch(url)
    .then(res => res.json())
    .then(data => {
       setPlants([...data])
       setMasterPlants([...data])
    })
}, [])

  function handleAdd(formData) {
    //console.log(formData)
    fetch(url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      setPlants([...plants, data])
      setMasterPlants([...plants, data])
    })
  }

  function handleSearch(term){
    console.log(term)
    if (term === "") {setPlants([...masterPlants])}
    else{
      setPlants(masterPlants.filter(i => i.name.startsWith(term)
      ))
    }
  }

  function handleDelete(name){
    let id = plants.find(i => i.name === name)
    id = id.id
    fetch(`${url}/${id}`, {method:'DELETE'})
    .then( setPlants(plants.filter(i => i.name !== name)) )
    .then( 
      setMasterPlants(masterPlants.filter(i => i.name !== name)))
      
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleAdd={handleAdd} handleSearch={handleSearch} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
