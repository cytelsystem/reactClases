import React, { Component } from 'react'
import {pokeContainer, pokeList, pokeOption} from "./styles/style"

class Pokedex extends Component {


    render() {
        const {updateParent} = this.props
        console.log(updateParent);
        return (
            <div style={pokeContainer}>
                <h3>POKEDEX</h3>
                <div style={pokeList}>

                    {this.props.pokemons.map(pokemon => (

                    <p onClick={() => updateParent({pokemon: [pokemon.name, pokemon.id, pokemon.type]})} style={pokeOption}>
                        {pokemon.name}
                    </p>

                    ))}

                </div>
            </div>
        )
    }
}

export default Pokedex;