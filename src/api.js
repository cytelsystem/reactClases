import axios from 'axios';


const url = "https://rickandmortyapi.com/api/";
const informacion = "character";


export const endpointTodo = async() => {

  let result = [];

  const endpoint = `${url}${informacion}/?page=1`

  const response = await axios.get(endpoint)
  .then(res => {
    return result.push(...response.data.results);
  })

  return result
  console.log("prueba", result)

}




// export const endpoint = async(page = null) => {

//   const endpoint = `${url}${informacion}/${page ? `?page=${page}` : ''}`

//   const response = await axios.get(endpoint)

//   return response.data.results

// }





