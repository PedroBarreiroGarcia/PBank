import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import PageContas from './Components/PageContas/PageContas';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AbrirConta' element={<PageContas/>}/>
        </Routes>
      
        <Footer/>
      </Router>    
    </div>
  );
}

export default App;
