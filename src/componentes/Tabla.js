import React from "react";
import "../stylesheets/Tabla.css";

function Tabla({ estudiantes }) {
  return (
    <div className="tabla-container">
      <div className="filter-container">
        <label htmlFor="filtrar">Buscar:</label>
        <input type="text" name="filtrar" id="filtrar" placeholder="Ingrese un nombre" />
      </div>
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombres</th>
            <th>Apelidos</th>
            <th>Matricula</th>
            <th>Curso</th>
            <th>Nota</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{estudiante.nombre}</td>
              <td>{estudiante.apellido}</td>
              <td>{estudiante.matricula}</td>
              <td>{estudiante.curso}</td>
              <td>{estudiante.nota}</td>
              <td>
                <input type="button" value={"Editar"} />
                <input type="button" value={"Eliminar"} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
