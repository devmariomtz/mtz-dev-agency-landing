const SubHero = () => {
  return (
    <section className="text-gray-600 body-font mb-14">
      <div className="container mx-auto flex px-5 pb-23 md:flex-row flex-col items-center">
        <div className="animate-fade-up lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="src/assets/mindset.svg"
          />
        </div>
        <div className="animate-fade-up lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {/* Before they sold out */}
            {/* <br className="hidden lg:inline-block"></br>readymade gluten */}
          </h1>
          <p className="mb-8 leading-loose text-xl text-justify">
            {/* &lt;MTZ/&gt; DEV es una agencia de desarrollo de software, */}
            <span className="font-bold">&lt;MTZ/&gt; DEV AGENCY</span> es una
            agencia de desarrollo de software, especializada en la prestación de
            servicios personalizados. Desde la creación de sitios web hasta el
            desarrollo de soluciones tecnologicas a medida donde destacamos en
            la atención a las necesidades únicas de cada cliente.
            <span className="font-semibold">
              &nbsp; Nuestro punto fuerte es la creación de soluciones de
              software a medida que impulsan la innovación y el crecimiento de
              las empresas.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
