import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleDelete}) {

  let listOfPlants = plants.map(i => <PlantCard name={i.name} image={i.image} price={i.price} key={i.id} handleDelete={handleDelete}/>)
  
  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
