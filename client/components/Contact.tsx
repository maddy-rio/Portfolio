import Nav from './Nav'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <Nav />
      <h1>Have More Questions?</h1>
      <p className="form">
        Get in touch with the TrendyWoofz team below! <br></br>
        We'd love to hear from you and your pup 🐾
      </p>
      <div className="container">
        <img src="Mail-icon.png" alt="Mail icon"></img>
        <form>
          <div className="body">
            <ul>
              <li>
                <label>
                  <input type="text" name="form" placeholder="First name" />
                </label>
              </li>
              <li>
                <label>
                  <input type="text" name="form" placeholder="Last Name" />
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="text"
                    name="form"
                    placeholder="What's your email?"
                  />
                </label>
              </li>
              <li>
                <textarea rows={4} name="form" placeholder="How can we help?" />
              </li>
              <li>
                <button type="submit">Send Message</button>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Contact
