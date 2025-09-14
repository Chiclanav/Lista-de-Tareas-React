import React, { useState } from "react";

function AgregarTarea({AgregarTarea}){
    const [nuevaTarea, setNuevaTarea] = useState("");

    const handleAgregar = () => {
        if (nuevaTarea.trim() === "") return; //Evita tareas vacias
        AgregarTarea(nuevaTarea); //Envia la tarea al padre
        setNuevaTarea(""); //Limpia el input
    }

    const estiloTarea = {
        backgroundColor: "lightGrey",
        width: "200px",
        height: "30px",
        textAlign: "center"
    }

    const estiloAgregar = {
        backgroundColor: "blue",
        color: "white",
        textAlign: "center",
        width: "70px",
        height: "35px"
    }
    return(
    <div id="contenedorTarea">
        <input 
        style={estiloTarea} 
        type="text"
        value={nuevaTarea} //Muestra el valor del estado
        onChange={(e) => setNuevaTarea(e.target.value)} //Actualiza el estado al escribir
        placeholder="Agregar nueva tarea" 
        />
        <button
        type="button"
        style={estiloAgregar}
        onClick={handleAgregar}
        >Agregar</button>        
    </div>
    )
}

export default AgregarTarea;