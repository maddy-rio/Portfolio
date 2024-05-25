import Nav from './Nav'
import Footer from './Footer'

function Projects() {
    return (
        <>
        <section className='Projects'>
        <Nav />
        <h1 className='page-header'>My projects</h1>
       {/* PPD Website */}
    <section id="left-section">
    <a href='https://pedersenpainting.netlify.app/' target='_blank'>
<img className='mockup'src="/PPD.png"></img>
</a>
<div className="projects-text">
  <div className='projects-header'>
  <h1 className="section-header">Pedersen Painting Website</h1>
  <a href='https://pedersenpainting.netlify.app/' target='_blank'>
  <img src='link.png'></img>
  </a>
  <a href='https://github.com/maddy-rio/pedersen-painting' target='_blank'>
  <img src='code.png'></img>
  </a>
  </div>
  <p>My first official client website, Pedersen Painting & Decorating. My partner was in need of a website and this was a brilliant project for me to develop my skills so of course I was keen to get started! I have applied a simple, yet elegant approach to the design and implementation of the website in order to present a good MVP (Minimum Viable Product) for Pedersen Painting & Decorating. The website is an ongoing project where I will further focus on making the website mobile friendly, improving performance, accessibility, connecting a personal domain, and adding animations to keep users engaged. The tech stack used for this project is HTML, Vanilla CSS, JavaScript, and React. I have also outsourced EmailJS to handle contact form enquiries. </p>
 <div >
  <img id='icon' src='html.png'></img>
           <img id='icon' src='css.png'></img>
           <img id='icon' src='js.png'></img>
           <img id='icon' src='react.png'></img>
           </div> 
            </div>
    </section>


    {/*  75 Day Challenge */}
    <section id="right-section">
      <a href='https://75daychallenge.netlify.app/' target='_blank'>
      <img className='mockup' src="/75DayChallenge.png"></img>
      </a>
      <div className="projects-text">
      <div className='projects-header'>
  <h1 className="section-header">75 Day Challenge</h1>
  <a href='https://75daychallenge.netlify.app/' target='_blank'>
  <img src='link.png'></img>
  </a>
  <a href='https://github.com/maddy-rio/75-day-challenge' target='_blank'>
  <img src='code.png'></img>
  </a>
  </div>
      <p>The 75 Day Challenge is inspired by the popular and viral 75 Soft challenge that encourages people to stick to healthy habits for 75 days straight to improve their lifestyle. As someone who was interested in completing the challenge, I found a problem… no where to track my progress digitally and seamlessly. So the 75 Day Challenge web application was born! This is an ongoing project that is currently at the MVP, with a few more features in the pipeline (including mobile friendly design). The tech stack used is HTML, Vanilla CSS, TypeScript, and React. I have also optimised images for better performance and incorporated 0 Auth for a personal user experience. </p>
<div>
        <img id='icon' src='html.png'></img>
           <img id='icon' src='css.png'></img>
           <img id='icon' src='ts.png'></img>
           <img id='icon' src='react.png'></img>
           </div>
            </div>
    </section>

     {/* Perfect Pet Quiz */}
     <section id="left-section">
     <a href='https://perfect-pet.netlify.app/' target='_blank'>
<img className='mockup' src="/perfectpet.png"></img>
</a>
<div className="projects-text">
<div className='projects-header'>
  <h1 className="section-header">Perfect Pet Quiz</h1>
  <a href='https://perfect-pet.netlify.app/' target='_blank'>
  <img src='link.png'></img>
  </a>
  <a href='https://github.com/maddy-rio/perfect-pet' target='_blank'>
  <img src='code.png'></img>
  </a>
  </div>
  <p>This is a simple yet polished web application that I created using HTML, Vanilla CSS, and JavaScript. Inspired by my love for animals, the Perfect Pet Quiz helps users find their perfect pet match by answering only two questions! Even though this was a small project, it gave me the opportunity to demonstrate some key fundamental programming skills and helped kick start my project collection.</p>
         <div>
           <img id='icon' src='html.png'></img>
           <img id='icon' src='css.png'></img>
           <img id='icon' src='js.png'></img>
           </div>
            </div>
    </section>

<div className='projects-footer'>
    <p>Checkout more projects and connect</p>
            <a href="https://github.com/maddy-rio" target='_blank'><img src="github.png"></img></a>
            <a href="https://www.linkedin.com/in/maddyrio-nz/" target='_blank'><img src="linkedin.png"></img></a>
            </div>
      </section>
        </>
    )
}

export default Projects