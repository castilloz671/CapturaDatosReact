import './App.css';
import React, {useState} from 'react';
import FormularioDatos from './componentes/FormularioDatos';
import Tabla from './componentes/Tabla';

function App() {

  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = estudiante => {
    setEstudiantes([...estudiantes, {...estudiante, id: estudiantes.length}]);
  };

  return (
    <div className="App">
        <FormularioDatos onAgregarEstudiante={agregarEstudiante} />
        <Tabla estudiantes={estudiantes}/>
    </div>
  );
}

export default App;
