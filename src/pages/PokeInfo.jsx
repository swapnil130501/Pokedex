import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function PokeInfo() {
    
    const { state } = useLocation();
    const pokemonData = state?.pokemonData;

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold">{pokemonData.name}</h1>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
        </div>
    );
}

export default PokeInfo;