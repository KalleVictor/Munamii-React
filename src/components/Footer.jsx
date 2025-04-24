import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="social-media">
        <a href="https://kallevictor.github.io/CV/" target="_blank" rel="noopener noreferrer" className="icon-btn2">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://kallevictor.github.io/CV/" target="_blank" rel="noopener noreferrer" className="icon-btn2">
          <img src={instagram} alt="Instagram" />
        </a>
        </div>
        <p className="footer-text">
          Munamii Cakery &copy; 2025 All rights reserved. <br />
          Crafted with React — in VS Code by{' '}
          <a href="https://kallevictor.github.io/CV/" target="_blank" rel="noopener noreferrer">
            Karl-Johan Victor
          </a>
        </p>
      </footer>
    </div>
  )
}
