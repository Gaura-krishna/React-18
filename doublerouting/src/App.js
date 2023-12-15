
import './App.css';
// import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import Navigation from './component/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      App
      <Navigation />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      
    </div>
  );
}

export default App;
