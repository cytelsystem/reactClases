import React, {useState, useEffect} from 'react';
import datosJson from '../configuracion.json'


// const url = "https://randomuser.me/api/";



function App (datos) {


  const url = "https://benjumeacarlos981.github.io/multicarga/original.json";
  const [configuracion, setTodos] = useState()

  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    console.log(responseJSON)
    setTodos(responseJSON)
  }

  useEffect(() => {
    fetchApi();

  }, [])




    return (
      <div>
        <ul>
          { !configuracion ? 'Cargando...' :
          <li key="1">{configuracion.contacto.telefono}</li>


          }
        </ul>


    </div>

    )



}


export default App;