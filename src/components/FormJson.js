import { useState } from 'react'
import { saveAs } from 'file-saver';
import styles from './styles/formjson.module.scss';
const Form = ({ handleSubmit, handleChange }) => {

  const [link1, setLink1] = useState("none");
  const [link2, setLink2] = useState("none");

  function getNewFileHandle(data) {

    const opts = {
      excludeAcceptAllOption: true ,
      suggestedName: data,
      types: [{
        description: 'Text file',
        // accept: {
        //   'text/plain': ['.txt']
        // },
        accept: {
          'image/*': ['.jpg', '.txt']
        }

      }],
    };

    const prueba = window.showSaveFilePicker(opts);

    console.log(prueba)
    return prueba;
  }



  return (
        <>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className="form-header">
              <h2>Guardar jSon</h2>
            </div>

            <div className="form-group">
                <label>Nombre</label>
                <input
                  onChange={handleChange}
                  className="form-control"
                  type="text"
                  name="nombre"
                />
              </div>
            <div className="form-group">
                <label>Detalle</label>
                <input
                  onChange={handleChange}
                  className="form-control"
                  type="text"
                  name="detalle"
                />
            </div>

            <div style={{display: `${link1}`}} className={`${styles.link} ${styles.link1}`}>
              <div className="form-group">
                  <label>Link Nombre1</label>
                  <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="link1"
                  />
              </div>
              <div className="form-group">
                  <label>Link Archivo1</label>
                  <input
                    id="archivo1"
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="archivo1"
                  />
                  <button onClick={() => {
                    var valor = document.getElementById("archivo1").value;
                    return getNewFileHandle(valor)
                    }} >archivos1</button>
              </div>
            </div>


            <div style={{display: `${link2}`}} className={`${styles.link} ${styles.link2}`}>
              <div className="form-group">
                  <label>Link Nombre2</label>
                  <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="link2"
                  />
              </div>
              <div className="form-group">
                  <label>Archivo 2</label>
                  <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="archivo2"
                  />
                  <button onClick={() => {
                    var valor = document.getElementById("archivo1").value;
                    return getNewFileHandle(valor)
                  }} >archivos1</button>
              </div>
            </div>




            <button type="submit">Registrar Usuario</button>
            <button onClick={() => (getNewFileHandle("javier.txt"))} >archivos1</button>
            <button onClick={() => {
                   {link1 === "none" ? setLink1("block") : link2 === "none" ? setLink2("block") : setLink2("block")}
                  }
              }>
                +
            </button>

            <button onClick={() => {
                   {link2 === "block" ? setLink2("none") : link1 === "block" ? setLink1("none") : setLink1("block")}
                  }
              }>
                -
            </button>

          </form>
        </>
      )

}
export default Form;

