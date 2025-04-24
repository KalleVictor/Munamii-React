import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import trolleyIcon from '../assets/trolley.png'

const cakeData = [
  { file: 'weddingcake1.png', description: 'Classic white wedding cake', price: '90€' },
  { file: 'weddingcake2.png', description: 'Chocolate tiered delight', price: '65€' },
  { file: 'weddingcake3.png', description: 'Rustic wedding cake with lace', price: '80€' },
  { file: 'weddingcake4.png', description: 'Naked wedding cake with berries', price: '75€' },
  { file: 'weddingcake5.png', description: 'Elegant floral wedding cake', price: '85€' },
  { file: 'weddingcake6.png', description: 'Lavender and honey cake', price: '70€' },
  { file: 'weddingcake7.png', description: 'Gold leaf wedding cake', price: '95€' },
  { file: 'weddingcake8.png', description: 'Red velvet wedding cake', price: '80€' }
]

const cupcakeData = [
  { file: 'cupcake1.png', description: 'Chocolate cupcake, 6 pcs', price: '4€' },
  { file: 'cupcake2.png', description: 'Vanilla Cupcakes, 6 pcs', price: '4.5€' },
  { file: 'cupcake3.png', description: 'Red velvet cupcake, 6 pcs', price: '5€' },
  { file: 'cupcake4.png', description: 'Lemon meringue cupcake, 6 pcs', price: '4.5€' },
  { file: 'cupcake5.png', description: 'Carrot cupcake, 6 pcs', price: '4.5€' },
  { file: 'cupcake6.png', description: 'Salted caramel cupcake, 6 pcs', price: '4.5€' },
  { file: 'cupcake7.png', description: 'Cookies & cream cupcake, 6 pcs', price: '5€' },
  { file: 'cupcake8.png', description: 'Strawberry cupcake, 6 pcs', price: '5€' }
]

export default function ProductsCakes() {
  const [activeTab, setActiveTab] = useState('cakes')

  const data = activeTab === 'cakes' ? cakeData : cupcakeData
  const title = activeTab === 'cakes' ? 'Our Wedding Cakes' : 'Our Delicious Cupcakes'

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

        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          {data.map((item, index) => {
            const img = require(`../assets/prod-images/${item.file}`)
            return (
              <SwiperSlide key={index}>
                <div className="product-card">
                  <img src={img} alt={item.description} className="products-img" />
                  <p className="DynamicDescr">{item.description}</p>
                  <div className="product-footer">
                    <button className="cart-btn">
                      <img src={trolleyIcon} alt="Add to cart" />
                    </button>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
