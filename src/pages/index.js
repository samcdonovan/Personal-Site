import Skill from '../components/Skill.jsx';

export default function Home() {
  return (
    <div className="middle-container">
      <div className="profile container">
        <img className="profile-pic" src="img/me-circle.png" alt="picture of sam" width="250px" height="250px" />
        <h2 className="section-title">Hey there!</h2>
        <p className="intro">I recently graduated from university with a First-class Honours degree in
          BSc Computer Science, and my current passions lie in Backend development,
          Full Stack development and Artificial Intelligence.</p>
        <hr className="separator" />
      </div>

      <div className="skills container-fluid">

        <h2 className="section-title">Skills/Interests</h2>
        <Skill
          imgPos="left-img"
          src="img/computer.png"
          alt="computer"
          title="Web Development"
          content="Through my studies, I found out that I thoroughly enjoy Web Development. I have experience in many key FullStack technologies but am always willing and excited to learn more!"
        />
        <Skill
          imgPos="right-img"
          src="img/robot.png"
          alt="robot"
          title="Artificial Intelligence"
          content="Artificial Intelligence was one of my favourite modules at University and I would love to explore more AI concepts in the future. Natural Language Processing (NLP) in particular is something that I am very interested in."
        />
      </div>

      <hr className="separator" />
      <div className="contact-me">
        <h2 className="section-title">Get In Touch</h2>
        <h3 className="sub-title">I don't bite!</h3>
        <p className="contact-message">Know of any opportunities that might suit me? Let me know! I'm currently seeking work, so it would be greatly appreciated!</p>
        <a className="btn btn-lg btn-primary" href="/contact">CONTACT ME</a>
      </div>
    </div>
  )
}
