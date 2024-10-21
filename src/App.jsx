import { Routes, Route } from 'react-router-dom';
import PokeInfo from "./pages/PokeInfo";
import Home from "./pages/Home"

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<PokeInfo />} />
        </Routes>
    );
}

export default App
