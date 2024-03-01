import React, { useState } from 'react'

function ShowHide() {
    {/**hook de react */}
    {/**declarar una variable que guarda el estado del componente btn q muestra y oculta*/}
    {/**useState devuelve un array el primero es la variables dond se guarda y estado
    y el 2do es la funcion q permite cambiar el valor de la 1era variable */}
    const [show, setShow] = useState(true);
    const manejarClick = (event) => {
        {/**usamos la variable setshow para cambiar el valor de show */}
        setShow(!show);
    }

    {/**en base a la variable show mostramos u ocultamos la sig info */}
  return (
    <div>
        {/**btn para cambiar el valor d show */}
        <button onClick={manejarClick}>{show ? "Ocultar" : "Mostrar"} Texto</button>
        {show && <h2>HIDE ME!</h2>}
        {/*show ? <h2>HIDE ME!</h2> : ""*/}
    </div>
  )
}

export default ShowHide