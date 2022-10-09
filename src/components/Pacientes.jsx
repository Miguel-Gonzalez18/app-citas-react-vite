import React from "react";

const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Proietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: {""}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          {paciente.sintomas}
        </span>
      </p>
      <div className="flex justify-around mt-10">
        <button className="py-2 px-7 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-xl" type="buttom" onClick={ () => setPaciente(paciente) }>Editar</button>

        <button className="py-2 px-7 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-xl" type="buttom" onClick={() => eliminarPaciente(paciente.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default Pacientes;
