import {useState} from "react";
import Titulo from "./components/Titulo.jsx";
import Filtro from "./components/Filtro.jsx";
import Padre from "./components/Padre.jsx";

function App(){
return (
      <div id="contenedor">
        <Titulo />
        <Padre />
      </div>
  );
}

export default App;

