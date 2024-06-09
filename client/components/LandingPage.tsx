
function Main() {
  return (
    <main>
      <section id="landingPage">

        <img onClick={() => window.location.href = "/about"} src="Profile.jpeg"></img>
      <div className="landingPage-text">
      <h2>Maddy Rio</h2>
      <h3>Software Developer</h3>
      <p>On a mission to develop my skills and
    make a <strong>difference.</strong></p>
      </div>

      </section>
 
    </main>
  )
}

export default Main