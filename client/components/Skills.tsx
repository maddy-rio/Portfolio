import Nav from './Nav'
import Footer from './Footer'

function Skills() {

    return (
        <>
        <Nav />
<section>
<h1 className="page-header">My skills</h1>

<div className='skills'>
    <img src="html.png" ></img>
    <img src="css.png" ></img>
    <img src="js.png" ></img>
    <img src="ts.png" ></img>
    </div>
    <div className='skills'>
    <img src="react.png" ></img>
    <img src="nodejs.png" ></img>
    <img src="cmd.png" ></img>
    <img src="git.png" ></img>
    <img src="github.png" ></img>
    </div>
    
    <p className='skills-text'>I have valuable technical skills that I gained from the Dev Academy Bootcamp which includes: HTML, CSS, JavaScript, TypeScript, React, Node.JS, Git, GitHub, and Command Line. I have also had the opportunity to improve my problem solving abilities along with my debugging skills. 

The skills I have that I believe truly put me apart from others are my human/soft skills and ability to empathise with people from different walks of life. I have a background in customer services which I believe I have really thrived in because I have a communication approach that puts others at ease. </p>
</section>

<Footer/>
        </>
    )
}

export default Skills