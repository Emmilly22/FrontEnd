//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import Blog from './components/pages/blog/Blog';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import BlogSingle from './components/pages/blog/BlogSingle';
import MetaAuthor from './components/pages/metaauthor/MetaAuthor';
import MetaDate from './components/pages/metadate/MetaDate';
import Login from './components/pages/loginRegister/Login';
import Exchange from './components/pages/exchange/Exchange';
import Countries from './components/countries/Countries';
import SingleCountry from './components/countries/SingleCountry';
import Shop from './components/pages/shop/Shop';
import ProductSingle from './components/pages/shop/ProductSingle';
import CartPage from './components/pages/shop/CartPage';
import CheckoutPage from './components/pages/shop/CheckoutPage';
import Cart from './components/pages/cart/Cart';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className= "App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginRegister" element={<Login />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:name" element={<SingleCountry />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductSingle />} />
          <Route path="/cart" element={<cartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;