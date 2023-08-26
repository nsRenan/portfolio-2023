import styles from './home.module.css'
import Image from '../images/image.jpg'

function Home (){
    return (
        <section className={styles.home}>
        <div className={styles.imagem}>
        <img src={Image} className={styles.img} />
        </div>
    <div className={styles.apresentacao}>
        <h1 className={styles.nome_dev} >Meu portfolio</h1>
        <p className={styles.text_dev} >Olá a todos! Eu sou Renan Renan</p>
    </div>
    </section>
        
    )
}

export default Home
