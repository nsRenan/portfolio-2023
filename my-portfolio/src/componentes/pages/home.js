import styles from './home.module.css'
import Image from '../images/image.jpg'

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.imagem}>
                <img src={Image} className={styles.img} />
            </div>
            <div className={styles.apresentacao}>
                <p className={styles.nome_dev}>Renan Nobre Santana</p>
                <p className={styles.text_dev} >Olá a todos! <br/>
                Sou um desenvolvedor <p2 className = {styles.gradient}>Full Stack</p2></p>
            </div>
        </section>
    )
}

export default Home
