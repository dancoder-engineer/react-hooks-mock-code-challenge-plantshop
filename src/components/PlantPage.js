import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, handleAdd, handleSearch, handleDelete}) {

  
  return (
    <main>
      <NewPlantForm handleAdd={handleAdd} />
      <Search handleSearch={handleSearch}/>
      <PlantList plants={plants} handleDelete={handleDelete}/>
    </main>
  );
}

export default PlantPage;
