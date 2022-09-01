import React from 'react'
import { Formik, Form, Field } from 'formik';

const Formulario = () => {
  return (
    <>
      <Formik >

          initialValues={{
            nombre: '',
            nombreLink: ''
          }}

          onSubmit={(valores) => {
            console.log(valores);
            console.log("formuilario enviado");
          }}

        {({}) => (
            <Form className="formulario">
              <div className="form-header">
                <h2>Guardar jSon</h2>
              </div>

              <div className="form-group">
                  <label htmlForm="nombreLink">Nombre</label>
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre"

                  />
                </div>
              <div className="form-group">
                  <label htmlForm="nombreLink">Nombrelink</label>
                  <Field
                    type="text"
                    id="nombreLink"
                    name="nombreLink"
                  />
                </div>

              <button type="submit">Enviar</button>
            </Form>
        )}
      </Formik>
    </>
  )
}

export default Formulario;