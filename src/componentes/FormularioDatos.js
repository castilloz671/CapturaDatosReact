import React, { useState } from 'react';
import '../stylesheets/FormularioDatos.css';

function FormularioDatos({ onAgregarEstudiante }) {

  const [estudiante, setEstudiante] = useState({
    nombre: '',
    apellido: '',
    matricula: '',
    curso: '',
    nota: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setEstudiante(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAgregarEstudiante(estudiante);
    setEstudiante({ nombre: '', apellido: '', matricula: '', curso: '', nota: '' })
  };

  return(
    <div className='form-container'>
      <h2>Datos Estudiantiles</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor='nombre'>Nombres: </label>
      <input type='text' name='nombre' id='nombre' placeholder='Ingrese Nombre' required onChange={handleChange} />
      <label htmlFor='apellido'>Apellidos: </label>
      <input type='text' name='apellido' id='apellido' placeholder='Ingrese Apellido' required onChange={handleChange} />
      <label htmlFor='matricula'>Matricula: </label>
      <input type='text' name='matricula' id='matricula' placeholder='Ingrese Matricula' required onChange={handleChange} />
      <label htmlFor='curso'>Curso: </label>
      <input type='text' name='curso' id='curso' placeholder='Ingrese Curso' required onChange={handleChange} />
      <label htmlFor='nota'>Nota: </label>
      <input type='number' name='nota' id='nota' placeholder='Ingrese Nota' required onChange={handleChange} />
      <div className='botones-form'>
          <input type='submit' value={'Agregar'} />
          <button className='boton-limpiar' type="button" onClick={() => setEstudiante({ nombre: '', apellido: '', matricula: '', curso: '', nota: '' })}>Limpiar</button>
      </div>
    </form>
    </div>
  );
}

export default FormularioDatos;