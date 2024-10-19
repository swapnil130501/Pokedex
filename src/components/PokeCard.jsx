import React, { useEffect, useState } from 'react'
import { typeColors } from '../utils/utility';
function PokeCard({ name }) {
    const [data, setData] = useState({});

    const getPokeInfo = async (pokeName) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log("Error fetching Pokémon data", error);
        }
    }

    useEffect(() => {
        getPokeInfo(name);
    }, [name]);

    const firstType = data?.types?.[0]?.type?.name;
    const bgColor = typeColors[firstType]?.bg || "from-gray-700 to-gray-900"; 
    const hoverColor = typeColors[firstType]?.hover || "hover:from-gray-600 hover:to-gray-800";
    
    return (
        <div className={`rounded-lg shadow-lg p-8 max-w-sm mx-auto bg-gradient-to-br ${bgColor} ${hoverColor} hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer`}>
            {data.sprites?.front_default && (
                <img
                    src={data.sprites.other['official-artwork'].front_default}
                    alt={name}
                    className="w-48 h-48 mx-auto mb-6"
                />
            )}
            <h1 className="text-3xl font-bold text-center mb-4 text-white capitalize">{name}</h1>
        </div>
    );
}

export default PokeCard