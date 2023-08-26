import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer (){
    return(
        <footer class={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href={'jonasfranco@gmail.com'}>jonasfranco@gmail.com</a>
                </li>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Renan e Jonas</span> &copy; 2023</p>
        </footer>
    )

}

export default Footer