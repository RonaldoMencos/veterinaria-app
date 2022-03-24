import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from './components/ListadoPacientes'
import { useState, useEffect } from 'react';

function App() {

  const [pacientes, setpacientes] = useState([])
  const [paciente, setpaciente] = useState({})

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(pacienteState =>
      pacienteState.id !== id
    )
    setpacientes(pacientesActualizados)
  }

  // Se Ejecuta una sola vez, cuando el componente esta listo
  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setpacientes(pacientesLS)
    }

    obtenerLocalStorage()
  }, [])
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])
  

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setpacientes={setpacientes}
          paciente={paciente}
          setpaciente={setpaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setpaciente={setpaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
