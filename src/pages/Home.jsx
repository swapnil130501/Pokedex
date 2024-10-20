import React, { useEffect, useState } from 'react'
import PokeCard from '../components/PokeCard';
import Input from '../components/Input';
import { Link, Router } from 'react-router-dom';

function Home() {

    const [pokeData, setPokeData] = useState([]);
    const [search, setSearch] = useState("");

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

    const filteredPokeData = pokeData.filter((poke) =>
        poke.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div style={{ backgroundColor: "#ffe4c4" }} className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 drop-shadow-lg uppercase tracking-wide flex items-center justify-center">
                Pokédex
                <img
                className="w-20 h-20 ml-5" 
                src="https://i.pinimg.com/originals/9d/48/ad/9d48ad1be2995e27e49ced3266785785.png"
                alt="Pokéball"
                />
            </h1>

            <div className="flex justify-center mb-8">
                <Input
                    type="text"
                    placeholder="Search for a Pokémon"
                    className="border border-gray-300 rounded-lg p-2 w-1/2 md:w-1/4"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                >
            </Input>
            </div>
        
            <div className="flex flex-wrap gap-6 justify-center">
                {filteredPokeData.map((pokemon) => (
                    <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
                        <PokeCard name={pokemon.name} />
                    </Link>
                ))}
            </div>

        </div>
    );
}

export default Home