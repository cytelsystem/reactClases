import { useState } from 'react'
import { saveAs } from 'file-saver';
import styles from './styles/formjson.module.scss';
import SubFormJson from './SubFormJson';
const Form = ({ handleSubmit, handleChange }) => {

  const [link1, setLink1] = useState("none");
  const [link2, setLink2] = useState("none");

  const handleClick = e => {
    return document.getElementById("formJson").reset();
    console.log('Button was clicked');
  };



  return (
        <>
          <form id="formJson" onSubmit={handleSubmit} className={styles.form}>
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


            < SubFormJson
              link={link1}
              styleLink={styles.link}
              styleLinkAd={styles.link1}
              labelNombre="Link Nombre1"
              labelArchivo="Archivo 1"
              idArchivo="archivo1"
              handleChange={handleChange}
              nameLink="link1"
              nameArchivo="archivo1"
              btnName="archivos1Sub"
            />
            < SubFormJson
              link={link2}
              styleLink={styles.link}
              styleLinkAd={styles.link2}
              labelNombre="Link Nombre2"
              labelArchivo="Archivo 2"
              idArchivo="archivo2"
              handleChange={handleChange}
              nameLink="link2"
              nameArchivo="archivo2"
              btnName="archivos2Sub"
            />

            <button onClick={(e) => {
              e.preventDefault();
                   {link1 === "none" ? setLink1("block") : link2 === "none" ? setLink2("block") : setLink2("block")}
                  }
              }>
                +
            </button>

            <button onClick={(e) => {
              e.preventDefault();
                   {link2 === "block" ? setLink2("none") : link1 === "block" ? setLink1("none") : setLink1("block")}
                  }
              }>
                -
            </button>

            {/* <button type="submit">Registrar</button> */}

          <button onClick={handleClick} className="btn btn-primary">
          Registrar
          </button>

            {/* <button onClick={handleSubmit} >Registrar</button> */}


          </form>
        </>
      )

}
export default Form;

