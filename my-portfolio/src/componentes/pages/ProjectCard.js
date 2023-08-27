import { Link } from "react-router-dom";
import Styles from "./ProjectCard.module.css";
import Image1 from "../images/praia.jpg";
import { SiGithub } from "react-icons/si";

function ProjectCard() {
  return (
    <section className={Styles.details_container}>
      <div className={Styles.project_card}>
        <img src={Image1} />
        <h4>Projeto 01</h4>
        <p>
          <span>Descrição:</span> Proejto teste testado e aprovado pelo imetro
          tudo aqui e 100% original
        </p>
        <p2>
            Tecnologias: Node.js and React.js
        </p2>
        <div className={Styles.project_card_actions}>
          <Link to={`/project`}>
            <SiGithub /> GitHub
          </Link>
          <Link>Deploy</Link>
        </div>
      </div>
      <div className={Styles.project_card}>
        <img src={Image1} />
        <h4>Projeto 02</h4>
        <p>
          <span>Descrição:</span> Proejto teste testado e aprovado pelo imetro
          tudo aqui e 100% original
        </p>
        <p2>
            Tecnologias: Node.js and React.js
        </p2>
        <div className={Styles.project_card_actions}>
          <Link to={`/project`}>
            <SiGithub /> GitHub
          </Link>
          <Link>Deploy</Link>
        </div>
      </div>
      <div className={Styles.project_card}>
        <img src={Image1} />
        <h4>Projeto 03</h4>
        <p>
          <span>Descrição:</span> Proejto teste testado e aprovado pelo imetro
          tudo aqui e 100% original
        </p>
        <p2>
            Tecnologias: Node.js and React.js
        </p2>
        <div className={Styles.project_card_actions}>
          <Link to={`/project`}>
            <SiGithub /> GitHub
          </Link>
          <Link>Deploy</Link>
        </div>
      </div>
      <div className={Styles.project_card}>
        <img src={Image1} />
        <h4>Projeto 04</h4>
        <p>
          <span>Descrição:</span> Proejto teste testado e aprovado pelo imetro
          tudo aqui e 100% original
        </p>
        <p2>
            Tecnologias: Node.js and React.js
        </p2>
        <div className={Styles.project_card_actions}>
          <Link to={`/project`}>
            <SiGithub /> GitHub
          </Link>
          <Link>Deploy</Link>
        </div>
      </div>
      <div className={Styles.project_card}>
        <img src={Image1} />
        <h4>Projeto 05</h4>
        <p>
          <span>Descrição:</span> Proejto teste testado e aprovado pelo imetro
          tudo aqui e 100% original
        </p>
        <p2>
            Tecnologias: Node.js and React.js
        </p2>
        <div className={Styles.project_card_actions}>
          <Link to={`/project`}>
            <SiGithub /> GitHub
          </Link>
          <Link>Deploy</Link>
        </div>
      </div>
      <div className={Styles.project_card}>
        <img src={Image1} />
        <h4>Projeto 06</h4>
        <p>
          <span>Descrição:</span> Proejto teste testado e aprovado pelo imetro
          tudo aqui e 100% original
        </p>
        <p2>
            Tecnologias: Node.js and React.js
        </p2>
        <div className={Styles.project_card_actions}>
          <Link to={`/project`}>
            <SiGithub /> GitHub
          </Link>
          <Link>Deploy</Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
