
import React from 'react';
import axios from 'axios';

// que contiene la variable user despues de que el componente se monta

const baseUrl = "https://rickandmortyapi.com/api/"

export default function useApi() {
  const[user, setUser] = React.useState()
  React.useEffect((email, password) => {
    try {
      // setUser(
      //   axios.get(`${baseUrl}/users/getMe`)
      // )
      setUser(
        axios.get(`https://rickandmortyapi.com/api`)
        )

    } catch (error) {
      console.error('error', error.message)
    }

  }, [])

  console.log("que hay en use", user)

  return (
    <div>
      {user.name}
    </div>
  );
}
