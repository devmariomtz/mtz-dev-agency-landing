const Diferenciadores = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          ¿Qué nos haces especiales?
          <br className="hidden sm:block"></br>
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M14 16H17.8C18.9201 16 19.4802 16 19.908 15.782C20.2843 15.5903 20.5903 15.2843 20.782 14.908C21 14.4802 21 13.9201 21 12.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H9.2C8.07989 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6.01338 4.49359 6.00082 5.01165 6.00005 6M18 6L13 11L10 8M18 6V9M18 6H15M9 12C9 13.1046 8.10457 14 7 14C5.89543 14 5 13.1046 5 12C5 10.8954 5.89543 10 7 10C8.10457 10 9 10.8954 9 12ZM7 17C7.92997 17 8.39496 17 8.77646 17.1022C9.81173 17.3796 10.6204 18.1883 10.8978 19.2235C11 19.605 11 20.07 11 21H3C3 20.07 3 19.605 3.10222 19.2235C3.37962 18.1883 4.18827 17.3796 5.22354 17.1022C5.60504 17 6.07003 17 7 17Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Pasión por el Éxito de Nuestros Clientes
              </h2>
              <p className="leading-relaxed text-base">
                Tu éxito es nuestra mayor motivación. Nos enorgullece ver crecer
                tu negocio y alcanzar tus metas. Trabajamos incansablemente para
                proporcionarte soluciones que no solo satisfagan tus necesidades
                actuales, sino que también te preparen para el futuro. Cuando
                tienes éxito, nosotros también lo hacemos.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                // stroke-linecap="round"
                // stroke-linejoin="round"
                // stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Experiencia Personalizada
              </h2>
              <p className="leading-relaxed text-base">
                En MTZ Dev Agency, no creemos en soluciones genéricas. Cada
                proyecto es único y merece un enfoque personalizado. Desde el
                primer contacto hasta la entrega final, te garantizamos una
                experiencia personalizada que se adapta a tus necesidades
                específicas y objetivos comerciales.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                // stroke-linecap="round"
                // stroke-linejoin="round"
                // stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <polygon points="15 6 15 9 18 9 21 6 18 6 18 3 15 6"></polygon>
                <path d="M15,9l-2.5,2.5M15,6V9h3l3-3H18V3Z"></path>
                <path d="M12.33,3H12a9,9,0,1,0,9,9c0-.11,0-.22,0-.33"></path>
                <path d="M16.9,13A5,5,0,1,1,11,7.1"></path>
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Ideas Convertidas en Tecnología
              </h2>
              <p className="leading-relaxed text-base">
                Creemos en el poder de tus ideas. Estamos aquí para convertirlas
                en realidades tangibles. Ya sea un nuevo producto innovador o la
                mejora de un proceso existente, estamos comprometidos a
                escucharte, colaborar contigo y hacer que tus ideas cobren vida.
                Tu visión nos inspira, y juntos podemos alcanzar grandes logros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciadores;
