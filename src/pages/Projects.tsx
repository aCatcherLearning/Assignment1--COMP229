import './pages.css'
import photo1 from '../assets/A1.png'
import photo2 from '../assets/A2.png'
import photo3 from '../assets/A3.png'

function Projects() {
  return (
    <section>
      <h1 className="section-title">Projects</h1>
      <p>
        A few things I've worked on.
      </p>

      <h2>Project 1</h2>
      <img src={photo1}/>
      <p>An assignment from my first semester, introducing a little bit about myself while exploring the basics of web development.</p>

      <h2>Project 2</h2>
      <img src={photo2}/>
      <p>Practicing my basic web application development skills while learning a little about conservation areas.</p>

      <h2>Project 3</h2>
      <img src={photo3}/>
      <p>Exploring new components of web development to implement tables and different types of clickables.</p>

    </section>
  );
}

export default Projects