import Styles from "./Projetos.module.css";
import ProjectCard from "./ProjectCard";


function Projetos() {
  return (
    <section>
      <div>
        <h1 className={Styles.projetos}>Projetos</h1>
      </div>
      <div className={Styles.projetos}>
        <h3>Projetos Concluidos</h3>
      </div>
      <div>
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projetos;
