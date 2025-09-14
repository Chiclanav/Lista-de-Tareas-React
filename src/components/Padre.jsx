import React, { useState } from "react";
import Tarea from "./Tarea";
import AgregarTarea from "./AgregarTarea";
import Filtro from "./Filtro";

function Padre() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  const AgregarTareaHandler = (nuevaTarea) => {
    setTareas(prev => [...prev, { id: Date.now(), texto: nuevaTarea, completado: false }]);
  };

  const toggleTarea = (id) => {
    setTareas(prev => prev.map(t => (t.id === id ? { ...t, completado: !t.completado } : t)));
  };

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completado;
    if (filtro === "completadas") return t.completado;
    return true;
  });

  return (
    <div>
      <AgregarTarea AgregarTarea={AgregarTareaHandler} />
      <Filtro setFiltro={setFiltro} filtro={filtro} />

      <div style={{ marginTop: 12 }}>
        {tareasFiltradas.map((t) => (
          <Tarea
            key={t.id}
            texto={t.texto}
            completado={t.completado}
            toggleTarea={() => toggleTarea(t.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Padre;
