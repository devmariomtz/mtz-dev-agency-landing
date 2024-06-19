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
            desarrollo de soluciones tecnologicas a medida.
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

{/* <section className="text-gray-600">
      <svg className="" viewBox="0 0 552.94084 367.92049" >
        <path d="M213.77996,33.23929h-67.08496c-2.30142,0-4.17392-1.87249-4.17392-4.17392s1.8725-4.17392,4.17392-4.17392h67.08496c2.30142,0,4.17392,1.87249,4.17392,4.17392s-1.8725,4.17392-4.17392,4.17392Z" fill="#e6e7e8" /><path d="M266.13329,47.3664h-119.43829c-2.30142,0-4.17392-1.87249-4.17392-4.17392s1.8725-4.17392,4.17392-4.17392h119.43829c2.30142,0,4.17392,1.87249,4.17392,4.17392s-1.8725,4.17392-4.17392,4.17392h0Z" fill="#e6e7e8" /><path d="M266.13329,61.3664h-119.43829c-2.30142,0-4.17392-1.87249-4.17392-4.17392s1.8725-4.17392,4.17392-4.17392h119.43829c2.30142,0,4.17392,1.87249,4.17392,4.17392s-1.8725,4.17392-4.17392,4.17392h0Z" fill="#e6e7e8" /><path d="M278.78484,134.01856v-2c-23.08527,0-43.24463-18.85779-48.60437-45.12573l8.69812,2.23767c-4.20703-3.98584-8.45721-10.65851-11.09375-16.11194-1.55719,5.85443-4.46582,13.21167-7.84137,17.92249l8.22992-3.89856c5.47247,27.32849,26.49829,46.97607,50.61145,46.97607Z" fill="#3f3d56" /><path d="M270.05257,57.47993c0,2.20557-1.79443,4-4,4h-52c-2.20557,0-4-1.79443-4-4s1.79443-4,4-4h52c2.20557,0,4,1.79443,4,4Z" fill="#1d4ed8" /><g><g><path d="M35.90386,280.29741c-.7916-2.75647-2.14717-5.10757-3.76107-6.78473l-5.86366-26.72989-12.78116,3.13107,7.32422,26.77768c-.48165,2.26559-.38528,4.97031,.40632,7.72675,1.8084,6.29712,6.55959,10.4794,10.61208,9.34143,4.0525-1.13797,5.87168-7.16522,4.06328-13.46231h-.00001Z" fill="#ffb6b6" /><path d="M34.13565,104.95641s-13.80493-.47648-21.80493,8.52352C3.16516,124.67631-3.09991,168.5471,1.6033,171.50123l12.74267,90.48536,18.17083-2.49686-4.66349-108.56891,6.28234-45.96446v.00005Z" fill="#1d4ed8" /></g><polygon points="127.33072 257.47993 124.02328 367.91723 76.52328 367.91723 74.60332 325.34722 66.16331 367.91723 15.25333 367.91723 21.60331 294.73723 28.1633 279.34722 32.60331 268.91723 127.33072 257.47993" fill="#2f2e41" /><path d="M89.60332,86.91724l-33-2-11.00001,14.00001c-9.50027,2.03415-18.08116,4.66021-24.00001,9,1.41608,41.9259-1.69464,96.44153,11.00003,107l-11.2726,79.56269s4.54595-3.89469,12.1397-2.51969c2.62343,.47503,5.79032,6.38486,9.01396,6.74297,24.76969,2.75164,64.93738-.07811,84.84634-41.22328l-7.7274-59.56268,1.99999-87.00001c-6.25235-4.94229-14.02573-8.15424-23-10l-8.99999-13.99999v-.00002Z" fill="#1d4ed8" /><g><path d="M153.1336,62.57842c.35806,3.46696-.09662,6.72734-1.14365,9.34143l5.49713,32.81189-15.68973,2.15901-3.88701-33.51685c-1.55922-2.34492-2.67064-5.44357-3.02869-8.91052-.81798-7.92024,2.60477-14.76279,7.64491-15.28331s9.78906,5.47809,10.60704,13.39833v.00002h-.00002Z" fill="#ffb6b6" /><path d="M100.97056,113.42402c-1.64275,2.4238-1.1851,5.14828-1.57732,8.42166-1.66507,13.89642,24.96442,54.95995,43.39029,59.68797,2.41791,.62042,3.7953,3.22858,6.23576,3.75311h.00002c7.22955,1.55386,13.96072-4.18445,13.5705-11.56882l-5.00511-94.70802-21.02719,7.17204,1.34588,49.17056c-.13403-10.18652-9.48758-20.55853-16.57266-24.87259,0,0-14.351-5.92216-20.36016,2.94408Z" fill="#1d4ed8" /></g><g><circle cx="76.52788" cy="53.26168" r="29.06773" fill="#ffb6b6" /><path d="M103.60332,31.91723c-.25,.06006,3.82632-3.91316,4-4,4-2-.11005,17.55-3,16.99999-7.11005-1.35004-10.17999-4.03003-12.94,2.65997-.77002,1.85999-1.25,3.96002-2.75,5.29004-2.06,1.81-5.47998,1.65997-7.15997,3.81995-1.35004,1.74005-.96002,4.30005,.03998,6.26001,1,1.97003,2.52002,3.64001,3.42999,5.65002,1.02002,2.26001-3.33002,9.45001-4.98999,13.48999v.01001l-.00987,.02367c-.44109,1.05969-1.48927-1.99294-2.59592-2.29765-1.32423-.36464-3.27507,2.76221-5.38422,2.19397-.01001,0-.02002-.01001-.03003-.01001-2.01001-.56-4.25-1.15997-6.46997-1.76001h-.01001c-6.25-1.69995-7.83002,.74005-8.13,.67004l-3.88-4.06c-1.33156-.9695-1.18106-4.0994-2.12-4.94-.76788-.68747-2.68219,.90109-3.24638,.2403-2.76637-3.24001-3.40286-6.48122-5.03365-12.88031-1.48999-5.84998-4.57996-23.35999,1.77002-24.15002,5.98999-.75,1.60999-9.08997,7.64001-8.77997-.35999-1.52002,.31-3.15002,1.40002-4.27002,1.07996-1.13,2.51996-1.83002,3.96997-2.42999,7.15002-2.91998,5.96002-5.42993,13.5-3.72998,.75-1.04999,10.36738-3.78733,11.72743-3.43729,.09998,.01996-2.09743,4.28733,3.27257,3.43729-.20001,1.23004,2.72743-1.43729,3,3,5.72743-3.43729,8.81,4.78998,9,6,.25,1.51001-2.03003,.73999-.51001,.96997,.90002,.14001,2.44,1.97003,2.29004,2.88,.64996-.88,1.29999-1.75,1.95996-2.63,.12,.01001,.22998,.03003,.35004,.04999,3.03998,.58002-.44522,10.51796-.32001,7.42004,.22998-5.69,4.25995-2.35999,1.22998-1.69h.00002Z" fill="#2f2e41" /></g></g><path d="M474.36993,25.95775c-1.07404,8.8273-2.2475,17.64251-3.52008,26.4434-.51691,3.57451-1.06342,7.19449-2.50153,10.50752-.98163,2.26144-2.35657,4.32654-3.72394,6.37788-1.61578,2.42407-3.25836,4.87904-5.45282,6.7952s-5.04492,3.26164-7.94946,3.03645c7.70642-5.18758,12.8858-13.96159,13.70416-23.21526,.3847-4.34975-.14313-8.72215-.24438-13.08771-.10126-4.36555,.26416-8.88307,2.27832-12.75752s5.99286-6.97589,10.35815-6.86575l-2.94849,2.76579h.00006Z" fill="#2f2e41" /><g><path d="M396.26787,214.23064h0c-6.27057,5.08578-13.97736,5.97379-17.21375,1.98346s-.77679-11.3479,5.49371-16.43365c2.74481-2.2262,5.76483-3.64789,8.5647-4.20834l26.84027-21.21652,9.68811,12.80746-27.48755,19.55594c-1.12628,2.62384-3.14075,5.28543-5.88556,7.51163h-.00006l.00012,.00003Z" fill="#a0616a" /><path d="M401.33776,185.42794l39.99296-37.948,4-3s22.95754-22.36648,28.9023-22.87869c2.51782-.21648,5.03571,.41119,7.1568,1.78918,3.42688,2.22208,5.20166,5.87984,5.20166,9.56644,0,3.08057-1.24091,6.17563-3.78046,8.45538l-36.61359,32.86926-15.57611,13.98169-19.37097,17.39417-1.96954-4.01126-6.659-13.5921-1.28418-2.62607v.00003l.00012-.00003Z" fill="#1d4ed8" /></g><path d="M486.85284,159.74625l-40.04333,12.26463c6.7041,1.88855,9.51105,42.73956,3.27209,44.00848,0,0,66.36469,4.72018,62.74347,0-4.41431-5.754,1.50592-43.99176,4.32867-44.00848l-30.3009-12.26463Z" fill="#a0616a" /><path d="M540.13634,367.92046l-3.5-42.23999c0-15.10999-.97998-28.76001-2.54999-40.92999-6.28998-48.85001-22.06-73.88998-22.06-73.88998h-59c-.08002,.09-.15997,.16-.23999,.25l-.01001,.01001c-13.91998,14.63-21.15997,51.41998-24.38,73.63-1.53003,10.57001-2.15002,17.84-2.15002,17.84l-5.77002,51.28,4.16998,14.04999h34.33002l-.53998-3.01001,22.09003-80.16,.27002-.98001,.23999,.98001,20.47998,83.17001h38.62v-.00003Z" fill="#2f2e41" /><path d="M454.23546,135.37935l12.46728-25.16714,10.50494-18.28423,8.49506-8.65739h23.24878l2.16437,8.65739,12.98608,7.21449,4.59332,36.07251-16.36458,78.26495c-19.47919-15.87189-59.62797-20.26772-59.62797-20.26772l-6.50531-18.93073-4.2998-22.80504-.51947-2.72707,12.8573-13.37006h0v.00003Z" fill="#1d4ed8" /><g><path d="M452.73968,180.90541h0c-8.07043-.229-14.49464-4.57792-14.34891-9.71369,.14571-5.13571,6.8062-9.11345,14.8766-8.88439,3.53272,.10023,6.74987,.99004,9.23871,2.38963l34.18456,1.39931-.99826,16.02791-33.59332-3.08063c-2.5642,1.25613-5.82665,1.96211-9.35933,1.86183h-.00001l-.00004,.00004Z" fill="#a0616a" /><path d="M496.45654,126.19796l32.24621,32.01426-56.16791,5.7518-13.05301,18.36017,78.2884,2.59582c7.06351,2.51549,14.58749-2.36608,15.16884-9.84155v-.00003c.19626-2.52421-15.8874-66.57211-25.62415-72.51812-11.41186-6.96901-30.85838,23.63765-30.85838,23.63765l6.36944-10.60332-6.36944,10.60332Z" fill="#1d4ed8" /></g><circle cx="492.52648" cy="51.43303" r="26.33295" transform="translate(433.15935 543.06627) rotate(-89.07621)" fill="#a0616a" /><path d="M550.33072,133.47993c-.65997,2.5-5.79999,3.78998-7,7-3.82001,2.17999-1.75-15.63-3.28998-16.79999-1.19-.89001-1.51001,1.25995-1.78003-.59003-1.02002-6.94-7.69-5.39001-12.63-6.51001-.56-1.08997-.98999-2.14996-1.26996-3.17999-.5-1.85999-2.78003-2.51001-4.13-1.14001-.61005-.53998-1.05005-2.45001-1.48004-4.35999-.31-1.39001-.62-2.77997-.97998-3.65997l-3.44-7.76001,1.10999,5.77997c-2.25-.81-4.51996,.03003-5.82996-2.75-1.68005-3.57001-2.35004-7.75-1.13-11.5,1.10999-3.39996,2.97998-10.20996,5.08997-15.84998-2.39001,1.72998-5.26001,2.98999-8.58997,3.62,1.17999-2.23999,2.38-4.52002,2.88-7.01001,.48999-2.48999,.18994-5.26001-1.39001-7.23999-1.29999-1.63-3.22003-1.22003-4.84003-2.53003-1.26001-1.01996-2.34998-3.62994-3.10999-5.06,3.23999,10.77002,5.69,22.21002,1.57001,32.49005-2.85004,7.12-8.85004,12.90997-16.04999,15.53998,3.82996-2.73999,7.57001-5.66003,10.44-9.38,3.06995-3.98999,5.06995-9.03003,4.45996-14.03003-.95996-7.84998-15.51996-32.67999-17.31-37.56,.98004,4.77002,.60004,8.49005-1.97998,10.54004-.66998-6.91998-8.21002-6.29004-12.32001-9.06,0,0-3.17999-17.97003,4.28003-18.08002,3.59998-.04999,7.37-8.51001,10.63995-10.02002,5.22003-2.40997,8.42004-.76996,14.21002-.58997,5.77997,.16998,11.33002,2.65997,14.85999,7.22998,1.85004,2.39001,2.53003,.48999,5.31,1.97998,2.64001,1.41003,4.41998,.10004,7.41003,.19,5.98999,.16003,11.79999,3.36005,15.15997,8.31,3.35999,4.96002,5.42999,4.5,4.09998,12.17004-.01996,.08997-.01996,.26996,0,.53998,.73004,12.08002-1.13995,24.19-5.92999,35.31-1.47998,3.41998,5.75938,6.94984,5.74938,11.21986-.01001,4.96002-7.99938,9.48015-7.25932,11.60015,2.12,10.21002,14.02997,7.94,11.21997,25.03003-.22998,1.38995,3.69,4.43994,3.25,6.10999Z" fill="#2f2e41" /><path d="M477.37841,102.21068c.21997-.06995,.44-.14996,.65997-.23999-.27997,.20003-.54999,.39001-.82996,.59003l.16998-.35004Z" fill="#2f2e41" /><path d="M514.47042,17.96025c-2.8645,.42569-5.77454-4.32687-4.14813-10.91754,3.54431,5.41956,5.35599,11.52063,5.64108,18.22217l-1.91016,.5918,.4172-7.89643Z" fill="#1d4ed8" /><path d="M529.10567,11.80848c-1.95477,6.92664-11.88171,11.56229-13.63525,9.15176l-.20065,4.13065-1.22723-1.57885c3.5603-5.29441,8.41327-9.35589,15.06305-11.70356h.00009Z" fill="#1d4ed8" /><g><path d="M311.12087,198.59383c0-2.30142,1.8725-4.17392,4.17392-4.17392h67.08496c2.30142,0,4.17392,1.8725,4.17392,4.17392s-1.8725,4.17392-4.17392,4.17392h-67.08496c-2.30142,0-4.17392-1.8725-4.17392-4.17392Z" fill="#e6e7e8" /><path d="M311.12087,226.59383c0-2.30142,1.8725-4.17392,4.17392-4.17392h67.08496c2.30142,0,4.17392,1.8725,4.17392,4.17392s-1.8725,4.17392-4.17392,4.17392h-67.08496c-2.30142,0-4.17392-1.8725-4.17392-4.17392Z" fill="#e6e7e8" /><path d="M262.94143,216.89486c-2.30142,0-4.17392-1.8725-4.17392-4.17392s1.8725-4.17392,4.17392-4.17392h119.43829c2.30142,0,4.17392,1.8725,4.17392,4.17392s-1.8725,4.17392-4.17392,4.17392h-119.43829Z" fill="#e6e7e8" /></g><g><path d="M254.06191,176.94701l-8.22992-3.89856c3.37555,4.71082,6.28418,12.06805,7.84137,17.92249,2.63654-5.45343,6.88672-12.1261,11.09375-16.11194l-8.69812,2.23767c5.35974-26.26794,25.5191-45.12573,48.60437-45.12573v-2c-24.11316,0-45.13898,19.64758-50.61145,46.97607Z" fill="#3f3d56" /><path d="M291.94109,216.97094h-52c-2.20557,0-4-1.79443-4-4s1.79443-4,4-4h52c2.20557,0,4,1.79443,4,4s-1.79443,4-4,4Z" fill="#1d4ed8" /></g><circle cx="291.67334" cy="132.65737" r="15.65737" transform="translate(114.00804 399.31512) rotate(-80.78253)" fill="#3f3d56" /><circle cx="206.67334" cy="9.65737" r="9.65737" fill="#e6e7e8" /><circle cx="319.67334" cy="176.65737" r="9.65737" fill="#e6e7e8" />
      </svg>
      &lt;MTZ/&gt; DEV es una agencia de desarrollo de software,
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
    </section> */}
