import React from 'react'
import { Link } from 'react-router'
import cake1 from '../assets/prod-images/cupcake1.png'
import cake2 from '../assets/prod-images/cupcake2.png'
import cake3 from '../assets/prod-images/cupcake3.png'
import cake4 from '../assets/prod-images/cupcake4.png'
import cake5 from '../assets/prod-images/cupcake5.png'
import cake6 from '../assets/prod-images/cupcake6.png'
import cake7 from '../assets/prod-images/cupcake7.png'
import cake8 from '../assets/prod-images/cupcake8.png'
import weddingcake1 from '../assets/prod-images/weddingcake1.png'
import weddingcake2 from '../assets/prod-images/weddingcake2.png'
import weddingcake3 from '../assets/prod-images/weddingcake3.png'
import weddingcake4 from '../assets/prod-images/weddingcake4.png'
import weddingcake5 from '../assets/prod-images/weddingcake5.png'
import weddingcake6 from '../assets/prod-images/weddingcake6.png'
import weddingcake7 from '../assets/prod-images/weddingcake7.png'
import weddingcake8 from '../assets/prod-images/weddingcake8.png'
import trolleyIcon from '../assets/trolley.png'
import { useState } from 'react'
  
  const cakeData = [
    { file: 'weddingcake1.png', description: 'Classic white wedding cake', price: '90€' },
    { file: 'weddingcake2.png', description: 'Chocolate tiered delight', price: '65€' },
    { file: 'weddingcake3.png', description: 'Rustic wedding cake with lace', price: '80€' },
    { file: 'weddingcake4.png', description: 'Naked wedding cake with berries', price: '75€' },
    { file: 'weddingcake5.png', description: 'Elegant floral wedding cake', price: '85€' },
    { file: 'weddingcake6.png', description: 'Lavender and honey wedding cake', price: '70€' },
    { file: 'weddingcake7.png', description: 'Gold leaf wedding cake', price: '95€' },
    { file: 'weddingcake8.png', description: 'Red velvet wedding cake', price: '80€' },
    // ... add more wedding cakes
  ];
  
  const cupcakeData = [
    { file: 'cupcake1.png', description: 'Chocolate cupcake, 6 pcs', price: '4€' },
    { file: 'cupcake2.png', description: 'Vanilla Cupcakes, 6 pcs', price: '4.5€' },
    { file: 'cupcake3.png', description: 'Red velvet cupcake, 6 pcs', price: '5€' },
    { file: 'cupcake4.png', description: 'Lemon meringue cupcake, 6 pcs', price: '4.5€' },
    { file: 'cupcake5.png', description: 'Carrot cupcake, 6 pcs', price: '4.5€' },
    { file: 'cupcake6.png', description: 'Salted caramel cupcake, 6 pcs', price: '4.5€' },
    { file: 'cupcake7.png', description: 'Cookies and cream cupcake, 6 pcs', price: '5€' },
    { file: 'cupcake8.png', description: 'Strawberry cupcake, 6 pcs', price: '5€' },
    // ... add more cupcakes
  ];
  
  export default function ProductsCakes() {
    const [activeTab, setActiveTab] = useState('cakes');
  
    const data = activeTab === 'cakes' ? cakeData : cupcakeData;
    const title = activeTab === 'cakes' ? 'Our Wedding Cakes' : 'Our delcious Cupcakes';
  
    return (
      <div id={activeTab}>
        <nav>
          <ul className="product-nav">
            <li>
              <button
                className={`btn ${activeTab === 'cakes' ? 'active' : ''}`}
                onClick={() => setActiveTab('cakes')}
              >
                Wedding Cakes
              </button>
            </li>
            <li>
              <button
                className={`btn ${activeTab === 'cupcakes' ? 'active' : ''}`}
                onClick={() => setActiveTab('cupcakes')}
              >
                Cupcakes
              </button>
            </li>
          </ul>
        </nav>
  
        <div className="products-toggle-div">
          <h1>{title}</h1>
          <ul>
            {data.map((item, index) => {
              const img = require(`../assets/prod-images/${item.file}`);
              return (
                <li key={index}>
                  <img src={img} alt={item.description} className="products-img" />
                  <p className="DynamicDescr">{item.description}</p>
                  <div className="product-footer">
                    <button className="cart-btn">
                      <img src={trolleyIcon} alt="Add to cart" />
                    </button>
                    <span className="price">{item.price}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }