
function Footer() {
  return (
    <footer>
      <div className="footer-line1"></div>
      <div className="footer-block">
        <div className="left-block">
          <p>
            Follow <strong>#TrendyWoofz</strong>
          </p>
          <img src="socials.png" alt="social-media logos" />
        </div>
        <div className="divider"></div>
        <div className="right-block">
          <p>Subscribe to stay trendy 🐾</p>
          <label>
            <input
              type="text"
              name="form"
              placeholder="Enter your email here"
            />
            <a type="submit">OK</a>
          </label>
        </div>
      </div>
      <div className="footer-line2"></div>
      <footer className="footer-nav">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
        <a href="/shipping">Shipping Info</a>
        <a href="/returns">Product Returns</a>
        <a href="/sizing">Size Guide</a>
      </footer>
    </footer>
  )
}

export default Footer