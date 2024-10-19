import React, { useEffect, useState } from 'react'
import PokeCard from '../components/PokeCard';

function Home() {

    const [pokeData, setPokeData] = useState([]);
    
    const getPokeData = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=500");
            const data = await response.json();
            setPokeData(data.results);
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    }

    useEffect(() => {
        getPokeData();
    }, []);

    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {pokeData.map((pokemon) => (
                <PokeCard key={pokemon.name} name={pokemon.name} />
            ))}
        </div>
    );
}

export default Home