import React, { useEffect, useState } from 'react'

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
    
    return (
        <div className="bg-white border rounded-lg p-4 shadow-md text-center">
            {data.sprites?.front_default && (
                <img
                    src={data.sprites.front_default}
                    alt={name}
                    className="w-24 h-24 mx-auto"
                />
            )}
            <h3 className="text-lg font-semibold mt-2">{name}</h3>
        </div>
    );
}

export default PokeCard