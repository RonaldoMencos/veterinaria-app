import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from './components/ListadoPacientes'
import { useState } from 'react';

function App() {

  const [pacientes, setpacientes] = useState([])

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setpacientes={setpacientes}
        />
        <ListadoPacientes 
          pacientes={pacientes}
        />
      </div>

    </div>
  )
}

export default App
