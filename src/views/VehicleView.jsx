import React from 'react'
import "./VehicleView.css";

//recibimos el vehiculo entero
function vehicleView({vehicle}) {
  return (
    <div className='VehicleView'>
        <h1>{vehicle.name}</h1>
        <h2>{vehicle.description}</h2>
        <img src={vehicle.image} alt={vehicle.name + " image"} />
    </div>
  )
}

export default vehicleView