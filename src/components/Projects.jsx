const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="w-100 font-semibold text-center text-3xl mb-4">
        Conoce nuestros proyectos
      </h1>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex justify-center flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1201x501"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Facturando SV
            </h2>
            <p className="leading-relaxed text-lg">
              Plataforma web que permite a todo el público emitir factura
              electronica y otros documentros tributarios.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-blue-700 border-0 py-2 px-5 focus:outline-none hover:bg-blue-500 rounded transform transition duration-500 hover:scale-110">
              Ver Proyecto
            </button>
          </div>
          {/* Quitar el justify-center en el contenedor */}
          {/* <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1202x502"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              TalNav
            </h2>
            <p className="leading-relaxed text-base">
              Una aplicación que facilita el servicio de transporte, brindado la capacidad de conectar personas que deseen rentar los asientos disponibles de sus auto a usuario que necesita un transporte comodo y seguro.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Ver más
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
