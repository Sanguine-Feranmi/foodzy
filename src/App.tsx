import { Routes, Route } from 'react-router-dom'
import './App.css'
import { CartProvider } from './context/CartContext'
import Head from './comps/head/head'
import Rnavbar from './comps/navbar/Rnavbar'
import FloatingNavbar from './comps/navbar/FloatingNavbar'
import Footer from './comps/footer/footer'
import ScrollToTop from './components/ui/common/ScrollToTop'
import Home from './components/modules/home/Home'
import ProductPage from './components/modules/product/productPage'
import Checkout from './pages/checkout/Checkout'
import GettingStarted from './pages/GettingStarted'
import Components from './pages/Components'
import Docs from './pages/Docs'
import AboutUs from './pages/about/AboutUs'
import Contact from './pages/contact/Contact'
import FAQ from './pages/faq/FAQ'
import HealthyEating from './pages/blog/HealthyEating'
import Recipes from './pages/blog/Recipes'
import News from './pages/blog/News'
import ButtonsPage from './pages/elements/ButtonsPage'
import CardsPage from './pages/elements/CardsPage'
import FormsPage from './pages/elements/FormsPage'
import AccountPage from './pages/account/AccountPage'
import WishlistPage from './pages/wishlist/WishlistPage'
import Careers from './pages/careers/Careers'
import IconsPage from './pages/elements/icons/IconsPage'

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
            <Route path="/pages/about" element={<AboutUs />} />
            <Route path="/pages/contact" element={<Contact />} />
            <Route path="/pages/faq" element={<FAQ />} />
            <Route path="/blog/healthy-eating" element={<HealthyEating />} />
            <Route path="/blog/recipes" element={<Recipes />} />
            <Route path="/blog/news" element={<News />} />
            <Route path="/elements/buttons" element={<ButtonsPage />} />
            <Route path="/elements/cards" element={<CardsPage />} />
            <Route path="/elements/forms" element={<FormsPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/pages/careers" element={<Careers />} />
            <Route path="/elements/icons" element={<IconsPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingNavbar position="bottom" />
        <ScrollToTop />
      </div>
    </CartProvider>
  )
}

export default App
