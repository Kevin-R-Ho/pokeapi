import React from 'react';
import { Frame, Card, CardHeader, CardTypes, Types, ImgContainer} from './PokemonCardStyle'
import pokemonType from './pokemonType';


const PokemonCard = ({pokemon}) => {
    return (
        <Frame>
            <Card>
            <CardHeader key={pokemon.name}>{pokemon.name.toLowerCase().split(" ")
            .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}
            </CardHeader>
                <CardTypes>
                    {pokemon.types.map(type => {
                        return(<Types style={{backgroundColor: pokemonType[type.type.name]}}>{type.type.name}</Types>)})}
                </CardTypes>
                <ImgContainer>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </ImgContainer>
                    {/* <div className="card-body mx auto">
                        <p className="title">Weight: </p><p>{pokemon.weight}</p>
                        <p className="title">Height: </p><p>{pokemon.height}</p>
                        <p className="title">Abilities: </p><p>{pokemon.abilities[0].ability.name}</p>
                    </div> */}
            </Card>
        </Frame>
    )
}

export default PokemonCard;