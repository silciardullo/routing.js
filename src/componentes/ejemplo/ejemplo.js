import React, { useState } from "react";

const Ejemplo = () =>{
    //Declaramos el estado 'nombre' con el valor inicial
    const [nombre, setNombre] = useState('Silvana');
    //esta función cambia el valor del nombre
    const CambiaNombre = () =>  {
        setNombre ('María')
    }
    
    return(
        <div>
            <h3>Ejemplos</h3>
            <h4>{nombre}</h4>
            <button onClick= { CambiaNombre}> Cambiar Nombre</button>
        </div>
    );

}

export default Ejemplo;