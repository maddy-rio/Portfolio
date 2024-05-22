
// Nav bar
function Nav() {
  return (
    <header className="nav">
      <img onClick={() => window.location.href = "/"} src="home.png"></img>
  
   <div className="nav-links">
    <a href="/about">About</a>
    <a href="/skills">Skills</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
    </div>
    </header>
  )
}

export default Nav



