import React from "react";

function Filtro({ setFiltro, filtro }){
    return(
        <div id="filtro">
            <button onClick={() => setFiltro("todas")} className="estilo-filtro">Todas</button>
            <button onClick={() => setFiltro("completadas")} className="estilo-filtro">Completadas</button>
            <button onClick={() => setFiltro("pendientes")} className="estilo-filtro">Pendientes</button>
        </div>
    )
}

export default Filtro;