import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import ProjectCard from '../../common/ProjectCard';
import lemon from '../../assets/lemon.png'
import dbft from '../../assets/dbft.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <ProjectCard
         src={freshBurger}
          link="https://todoapp9000.netlify.app/"
          h3="Todo App"
          p="An app for your todos"
        />

        
        <ProjectCard
         src={dbft}
          link="https://moveitfast.netlify.app"
          h3="Workout app"
          p="An app for getting fit"
        />
        
        <ProjectCard
         src={lemon}
          link="https://tenor.com/view/im-working-on-it-progress-trying-my-best-keanu-reeves-john-wick-gif-13730626"
          h3="Restaurant app"
          p="coming soon"
        />




      </div>
    </section>
  );
}

export default Projects;