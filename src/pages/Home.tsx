import { Link } from 'react-router-dom'
import './pages.css'

export default function App() {

  return (
    <>

    <main>
      <section className="home">
        <h1>Welcome to my Portfolio!</h1>

        <p>I am a student at Centennial College and currently in the Software Engineering Technology - AI program. I found my love for coding in high school leading to further interest in this area.</p> 

        <div className="MissionStatement">
            <h2>Mission Statement</h2>
            <p>I aim to learn what I can to become the best coder I can be. I would love to be able to continue learning and helping others with code and computer stuff!</p>
        </div>
        
        <div className="homeLinks">
          <Link to="/about">About Me</Link>
          <Link to="/contact">Contact Me</Link>
        </div>

      </section>
      </main>
    </>
  )
}