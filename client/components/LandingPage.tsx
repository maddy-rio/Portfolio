
function Main() {
  return (
    <main>
      <section id="landingPage">

        <img onClick={() => window.location.href = "/about"} src="Profile.jpeg"></img>
      <div className="landingPage-text">
      <h2>Maddy Rio</h2>
      <h3>Front-end Developer</h3>
      <p>On a mission to develop my skills and make a difference.</p>
      </div>

      </section>
 
    </main>
  )
}

export default Main