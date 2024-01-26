import { Routes, Route } from 'react-router-dom'
import App from './components/App'
import About from './components/About'
import Shop from './components/Shop'
import Contact from './components/Contact'

export const routes = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
)
