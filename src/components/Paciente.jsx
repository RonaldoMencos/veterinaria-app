const Paciente = ({ paciente }) => {
    return (
        <div className="bg-white mx-3 my-5 px-5 py-10 rounded-lg shadow-md ">
            <p className="font-bold text-gray-700 mb-3 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">
                    {paciente.nombre}
                </span>
            </p>
            <p className="font-bold text-gray-700 mb-3 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">
                    {paciente.propietario}
                </span>
            </p>
            <p className="font-bold text-gray-700 mb-3 uppercase">
                Email: {''}
                <span className="font-normal normal-case">
                    {paciente.email}
                </span>
            </p>
            <p className="font-bold text-gray-700 mb-3 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">
                    {paciente.fecha}
                </span>
            </p>
            <p className="font-bold text-gray-700 mb-3 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">
                    {paciente.sintomas}
                </span>
            </p>
            <div className="flex">
                <button
                    type="button"
                    className="py-2 mt-2 mr-5 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 mt-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"

                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente