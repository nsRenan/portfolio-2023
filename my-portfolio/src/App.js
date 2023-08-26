import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componentes/pages/home';
import Projetos from './componentes/pages/Projetos';
import Redes from './componentes/pages/Redes';
import Certificados from './componentes/pages/Certificados';
import Navbar from './componentes/layout/Navbar';
import Footer from './componentes/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/projetos' element={<Projetos />} />
    <Route exact path='/redes' element={<Redes />} />
    <Route exact path='/certificados' element={<Certificados />} />
    </Routes>
    <Footer/>
    </Router>
    
  )
}

export default App;
