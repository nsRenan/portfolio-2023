import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../componentes/images/bag.svg'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                <img src={logo}/>
                </Link>   
                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to='/sobre'>Sobre Mim</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to='/projetos'>Meus Conhecimentos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to='/projetos'>Meus Projetos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to='/certificados'>Meus Certificados/Experiências</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to='/redes'>Minhas Redes</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar