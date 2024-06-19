import { Formik } from "formik";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const app_form_url = import.meta.env.VITE_APP_FORM_URL;
const form_url = import.meta.env.VITE_FORM_URL;
const name_entry = import.meta.env.VITE_NAME_ENTRY;
const email_entry = import.meta.env.VITE_EMAIL_ENTRY;
const message_entry = import.meta.env.VITE_MESSAGE_ENTRY;

const Form = () => (
  <section className="text-gray-600 body-font relative">
    <div className="container px-5 pt-20 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          ¿Tienes preguntas?
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Rellena el siguiente formulario, y pronto nos pondremos en contacto contigo, estamos muy contentos de poder ayudarte.
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <Formik
          className="flex flex-wrap -m-2"
          initialValues={{ name: "", email: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Ingrese su email por favor";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Ingrese una dirección de correo valida";
            }
            if (!values.name) {
              errors.name = "Ingrese su nombre por favor";
            }
            if (!values.message) {
              errors.message = "Ingrese un mensaje por favor";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            // hacer un post a la api del formulario con los valores en formData
            const formData = new FormData();
            formData.append(name_entry, values.name);
            formData.append(email_entry, values.email);
            formData.append(message_entry, values.message);

            const params = new URLSearchParams();
            for (const pair of formData.entries()) {
              params.append(pair[0], pair[1]);
            }

            params.append("FORM_URL", form_url);

            try {
              const response = await axios.post(app_form_url, params);
              console.log("RES:",response);
              toast.success("Mensaje enviado! 🤩📈", { duration: 2500 });
            }
            catch (error) {
              console.log(error);
              toast.error("No pudimos enviar el mensaje 😥", { duration: 2500 });
            }
            setSubmitting(false);
            values.name = "";
            values.email = "";
            values.message = "";
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            // handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
              <div className="p-2 w-full md:w-50">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingrese su nombre"
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                <span className="text-red-400">
                  {errors.name && touched.name && errors.name}
                </span>
              </div>

              <div className="p-2 w-full md:w-50">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Ingrese su correo electrónico."
                    name="email"
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <span className="text-red-400">
                  {errors.email && touched.email && errors.email}
                </span>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    placeholder="Escribinos tu mensaje, pregunta o consulta..."
                    name="message"
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={values.message}
                  ></textarea>
                </div>
                <span className="text-red-400">
                  {errors.message && touched.message && errors.message}
                </span>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg gap-2 justify-items-center items-center"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Enviar
                  {/* mostrar un spinner si está enviando sino el icono de enviar */}
                  {isSubmitting ? (
                    <svg
                      className="animate-spin -mr-1 ml-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 overflow-visible rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <Toaster />
    </div>
  </section>
);

export default Form;
