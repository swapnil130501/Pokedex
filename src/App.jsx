import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokeInfo from "./components/PokeInfo";
import Home from "./pages/Home"

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:name" element={<PokeInfo />} />
            </Routes>
        </Router>
    );
}

export default App
