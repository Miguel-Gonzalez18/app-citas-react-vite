import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPaciente from './components/ListadoPaciente'
ListadoPaciente
Formulario

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
    setPacientes(pacientesLS)
  },[])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = id => {
    const respuesta = confirm('Seguro que quieres eliminar este registro?')
    if (respuesta){
      const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
      setPacientes(pacientesActualizados)
    }
  }

  return (
    <div className="container md:px-5 mx-auto mt-20">
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          paciente={paciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div> 
  )
}

export default App
