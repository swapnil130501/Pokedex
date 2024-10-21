import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function PokeInfo() {
    const { name } = useParams();
    const { state } = useLocation();
    const pokemonData = state?.pokemonData;

    return (
        <div className="p-8">  
            {pokemonData.sprites?.front_default && (
                <img
                    src={pokemonData.sprites.other['official-artwork'].front_default}
                    alt={name}
                    className="w-48 h-48 mx-auto mb-6"
                />
                
            )}

            <h1 className="text-4xl font-bold text-center mb-4 capitalize">{pokemonData.name}</h1>
            
            <div className="mb-6">
                <h2 className="text-4xl font-semibold mb-4">Type:</h2>
                <p className="text-lg">{pokemonData?.types?.[0]?.type?.name} </p>
            </div>

            <div className="mb-6">
                <h2 className="text-4xl font-semibold mb-4">Height:</h2>
                <p className="text-lg">{pokemonData.height}</p>
            </div>

            <div className="mb-6">
                <h2 className="text-4xl font-semibold mb-4">Weight:</h2>
                <p className="text-lg">{pokemonData.weight}</p>
            </div>

            <div className="mb-6">
                <h2 className="text-4xl font-semibold mb-4">Moves:</h2>
                <ul>
                    {pokemonData.moves.slice(0, 10).map((move) => (
                        <li key={move.move.name} className="text-lg">{move.move.name}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-4xl font-semibold mb-4">Abilities:</h2>
                <ul>
                    {pokemonData.abilities.map((it) => (
                        <li key={it.ability.name} className="text-lg">{it.ability.name}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-4xl font-semibold mb-4">Stats:</h2>
                <ul>
                    {pokemonData.stats.map((it) => (
                        <li key={it.stat.name} className="text-lg">{it.stat.name}
                            <span>{it.base_stat}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PokeInfo;