import './pages.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="space-y-2">
      <h1>Learn About Me!</h1>

      <h2>Legal Name:</h2>
      <p>Abigail Catcher</p>

      <h2>A Little About Me</h2>
      <p>I love computers, games, watching movies and tv, hanging out with friends and family, and spending time with horses. I've always liked school, more in my earlier years than I do now, but I still enjoy it!</p>

      <h2>Resume Link</h2>
      <Link to='../assets/Resume.pdf'></Link>
    </section>
  );
}