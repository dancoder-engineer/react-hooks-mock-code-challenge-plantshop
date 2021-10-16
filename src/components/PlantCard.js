import React, {useState} from "react";

function PlantCard({name, image, price, handleDelete}) {

  let [inStock, changeInStock] = useState(true)


  function changeStock() {
    changeInStock(!inStock)
  }

  function prepDelete(){
    handleDelete(name)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={changeStock}>In Stock</button>
      ) : (
        <button onClick={changeStock}>Out of Stock</button>
      )}
      <button onClick={prepDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
