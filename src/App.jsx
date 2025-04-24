import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Header from './components/Header';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Counter from './components/Counter';




function App() {
  const [data, setData] = useState("This is a first value"); 

  function handleClick(){
    setData("This is a second value");
  }

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
          <Route path="*" element={<NoPage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      </>
      {/* <br>   
      </br>
      <button onClick={handleClick}>Change Data</button>
      {data}
      <Counter />
      <tr>  </tr>
      <br>   
      </br> */}
      <Footer />
    </div>
  );
}

export default App;
