import React from "react";
import Pacientes from "./Pacientes";

function ListadoPaciente({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-xl text-center">Listado paciente</h2>
          <p className="mt-5 text-lg mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => {
            return <Pacientes setPaciente={setPaciente} key={paciente.id} paciente={paciente} eliminarPaciente={eliminarPaciente} />;
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-xl text-center">No hay pacientes</h2>
          <p className="mt-5 text-lg mb-10 text-center">
            Comienza agregando un paciente {""}
            <span className="text-indigo-600 font-bold">
              y aparecerá en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPaciente;
