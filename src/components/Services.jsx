const Services = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="w-full text-center text-3xl">
          Nos encanta apoyar a las empresa así:
        </h2>
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>

          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                // stroke-linecap="round"
                // stroke-linejoin="round"
                // stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Creación de paginas web modernas y seguras
              </h2>
              <p className="leading-relaxed">
                Queremos ayudarte a que tu empresa tenga presencia en el
                internet, para ello puedes ulizar una pagina web moderna con
                toda la información y requerimientos para llegar a nuevos
                clientes.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>

          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                // stroke-linecap="round"
                // stroke-linejoin="round"
                // stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Desarrollo de sistemas empresariales
              </h2>
              <p className="leading-relaxed">
                Sabemos que el ambiente empresarial exige una
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>

          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                // stroke-linecap="round"
                // stroke-linejoin="round"
                // stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                The 400 Blows
              </h2>
              <p className="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>

          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                // stroke-linecap="round"
                // stroke-linejoin="round"
                // stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Neptune
              </h2>
              <p className="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
