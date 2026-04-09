import { Routes, Route } from 'react-router-dom'
import './App.css'
import { CartProvider } from './context/CartContext'
import Head from './comps/head/head'
import Rnavbar from './comps/navbar/Rnavbar'
import Footer from './comps/footer/footer'
import Home from './components/modules/home/Home'
import ProductPage from './components/modules/product/productPage'
import Checkout from './pages/checkout/Checkout'
import GettingStarted from './pages/GettingStarted'
import Components from './pages/Components'
import Docs from './pages/Docs'

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Rnavbar />
        <Head />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/components" element={<Components />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/installation" element={<Docs />} />
            <Route path="/docs/primitives/typography" element={<Docs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
