import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setpaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-[48rem] md:overflow-y-scroll ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map(paciente =>
          (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setpaciente={setpaciente}
              eliminarPaciente={eliminarPaciente}
            />
          )
          )}
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar.
            </span>
          </p>
        </>
      )}


    </div>
  )
}

export default ListadoPacientes