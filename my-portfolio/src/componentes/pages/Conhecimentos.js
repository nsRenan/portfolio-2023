import Styles from "./Conhecimentos.module.css";
import {SiJavascript, SiGithub, SiNodedotjs, SiReact, SiHtml5, SiCss3, SiGit, SiTypescript, SiPostgresql, SiVisualstudiocode, SiWordpress, SiPython} from 'react-icons/si'

function Conhecimentos() {

  return (
    <section>
      <div className={Styles.conhecimentos}>
        <h1 >Conhecimentos</h1>
      </div>
      <div className={Styles.conhecimentos}>
        <h3>Tecnlogias que tenho trabalhado recentemnete</h3>
      </div>
      <div className={Styles.images}>
        <SiHtml5 color="#F1662A"/> <SiCss3 color="#1572B6"/> <SiGit color="#DE4C36"/> <SiGithub/> <SiVisualstudiocode color="#0065A9"/>  <SiNodedotjs color="#388E3C"/> 

        <SiPostgresql color="#0277BD"/> <img width="120" height="120"  src="https://img.icons8.com/color/120/python--v1.png" alt="python--v1"/> <SiReact color="#00D8FF"/> <SiTypescript color="#1F9CF0"/> <SiJavascript color=" #F5DE19"/>  <SiWordpress  color="#01579B"/>
      </div>
    </section>
  );
}

export default Conhecimentos;
