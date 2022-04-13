import React, { useState } from 'react';


function Button() {
  //definimos el hook ustate con 2 valores (Tupla)
  //1) inicializacion
  const [message, setMessage] = useState("");
  //mesage es el GETTER
  function handleClick() {
    //ACTUALIZACION
    setMessage("soy un mensaje actualizado");
  }


  return (
    <>
      <span>El valor del estado message es :{message}</span>

      <button onClick={handleClick} >Saludar</button>

    </>
  )
}





export default Button;