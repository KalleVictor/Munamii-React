import './App.css';
import { Routes, Route, } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Header from './components/Header';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </main>
      </>

      <Footer />
    </div>
  );
}

export default App;
