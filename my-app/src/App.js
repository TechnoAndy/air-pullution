import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import City from './Components/City';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Pollution from './Components/Pollution';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<City />} />
        <Route path="/pollutiondata" element={<Pollution />} />
      </Routes>
    </Router>
  );
}

export default App;