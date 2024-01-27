import Nav from './Nav'
import Footer from './Footer'

function Shop() {
  return (
    <>
      <Nav />
      <h1>Shop Collection</h1>
      <div className="card">
        <h3>QuikHarness</h3>
        <p className="price">$40 NZD</p>
        <img src="Harness.png" alt="QuikHarness" />
        <button>Add to Cart</button>
      </div>
      <div className="card">
        <h3>Woofz Collar</h3>
        <p className="price">$50 NZD</p>
        <img src="Collar.png" alt="Woofz Collar" />
        <button>Add to Cart</button>
      </div>
      <div className="card">
        <h3>Comfort Leash set</h3>
        <p className="price">$30 NZD</p>
        <img src="Comfort-Leash.jpeg" alt="Comfort Leash set" />
        <button>Add to Cart</button>
      </div>
      <div className="card">
        <h3>Luxe Leash</h3>
        <p className="price">$40 NZD</p>
        <img src="Luxe-Leash.jpg" alt="Luxe Leash" />
        <button>Add to Cart</button>
      </div>
      <div className="card">
        <h3>Ultimate Bundle</h3>
        <p className="price">$99 NZD</p>
        <img src="TrendyWoofz.jpg" alt="Brand logo" />
        <button>Add to Cart</button>
      </div>
      <Footer />
    </>
  )
}

export default Shop
