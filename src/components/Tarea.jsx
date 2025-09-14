import React, { useState } from "react";

function Tarea({ texto, completado, toggleTarea }){
    return(
        <div id="estilo-bloque">
        <input
        id="checkbox" 
        type="checkbox"
        checked={completado}
        onChange={toggleTarea}
        />
        <span>{texto}</span>
        </div>
    )
}

export default Tarea;