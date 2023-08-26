import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Projetos from './componentes/pages/Projetos';
import Redes from './componentes/pages/Redes';
import Certificados from './componentes/pages/Certificados';
import Navbar from './componentes/layout/Navbar';
import Footer from './componentes/layout/Footer';
import Principal from './componentes/pages/Principal';
import About from './componentes/pages/About'
import Styles from './App.css'

function App() {
  return (
    <Router >
      <Navbar/>
      <Routes>
    <Route  path='/' element={<Principal />}></Route>
    <Route  path='/projetos' element={<Projetos />} />
    <Route  path='/redes' element={<Redes />} />
    <Route  path='/certificados' element={<Certificados />} />
    <Route  path='/sobre' element={<About />} />
    </Routes>
    <Footer/>
    </Router>
    
  )
}

export default App;
