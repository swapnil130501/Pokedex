import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function PokeInfo() {
    const { name } = useParams();
    const { state } = useLocation();
    const pokemonData = state?.pokemonData;

    return (
        <div className="p-8 min-h-screen bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-500 text-white flex flex-col items-center">
            {/* Pokémon Image with Subtle Shadow and Hover Effect */}
            {pokemonData?.sprites?.other['official-artwork'].front_default && (
                <img
                    src={pokemonData.sprites.other['official-artwork'].front_default}
                    alt={name}
                    className="w-48 h-48 mb-6 border-4 border-yellow-500 rounded-full shadow-lg transition-transform transform hover:scale-105"
                />
            )}

            {/* Pokémon Name */}
            <h1 className="text-5xl font-extrabold text-center mb-6 capitalize bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-500 to-purple-700 drop-shadow-md">
                {pokemonData?.name}
            </h1>

            {/* Adjusted Card Layout */}
            <div className="bg-white bg-opacity-70 rounded-lg shadow-md p-8 max-w-4xl w-full md:w-2/3 lg:w-1/2 text-gray-800 transition-transform hover:shadow-lg hover:-translate-y-2">
                
                {/* Type Section */}
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold mb-2 text-indigo-700">Type</h2>
                    <p className="text-lg">{pokemonData?.types?.[0]?.type?.name}</p>
                </div>

                {/* Height Section */}
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold mb-2 text-indigo-700">Height</h2>
                    <p className="text-lg">{pokemonData?.height} decimetres</p>
                </div>

                {/* Weight Section */}
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold mb-2 text-indigo-700">Weight</h2>
                    <p className="text-lg">{pokemonData?.weight} hectograms</p>
                </div>

                {/* Moves Section */}
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold mb-2 text-indigo-700">Moves</h2>
                    <ul className="text-lg list-disc pl-5">
                        {pokemonData?.moves.slice(0, 10).map((move) => (
                            <li key={move.move.name} className="hover:text-purple-600 transition-colors">{move.move.name}</li>
                        ))}
                    </ul>
                </div>

                {/* Abilities Section */}
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold mb-2 text-indigo-700">Abilities</h2>
                    <ul className="text-lg list-disc pl-5">
                        {pokemonData?.abilities.map((it) => (
                            <li key={it.ability.name} className="hover:text-purple-600 transition-colors">{it.ability.name}</li>
                        ))}
                    </ul>
                </div>

                {/* Stats Section */}
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold mb-2 text-indigo-700">Stats</h2>
                    <ul className="text-lg">
                        {pokemonData?.stats.map((it) => (
                            <li key={it.stat.name} className="flex justify-between py-1">
                                <span>{it.stat.name}</span>
                                <span className="font-bold text-purple-600">{it.base_stat}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PokeInfo;
