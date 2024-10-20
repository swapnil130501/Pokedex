import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PokeInfo() {
    const { name } = useParams(); 
    const [pokemon, setPokemon] = useState(null);

    const fetchPokemonDetails = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error("Error fetching Pokémon details:", error);
        }
    };

    useEffect(() => {
        fetchPokemonDetails();
    }, [name]);

    if (!pokemon) return <p>Loading...</p>;

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold">{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    );
}

export default PokeInfo;