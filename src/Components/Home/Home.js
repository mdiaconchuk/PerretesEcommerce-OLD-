import React, { useContext } from 'react'
import Footer from '../Vital/Footer'
import Navbar from '../Vital/Navbar'
import Bannercarousel from './Bannercarousel'
import Card from '../Vital/Card'
import data from '../Vital/products.json'
import SalesContainer from './SalesContainer'
import ProductContainer from './ProductContainer'
import { ThemeContext } from '../Vital/ThemeContext'

function Home() {
  let { DarkMode } = useContext(ThemeContext)

  return (
    <div>

      <Navbar />
      <Bannercarousel />
      <p class="fs-3 mt-3 border-1 border-success border-bottom mb-4"></p>
      <p class="fs-2 mt-3 mb-4">DESTACADOS</p>
      <SalesContainer />
      <p class="fs-3 mt-4 border-1 border-success border-bottom mb-4"></p>
      <p class="fs-2 mt-3 mb-4">PRODUCTOS</p>
      <ProductContainer />

      <p class="mt-4 pt-5 text-decoration-underline fw-bold fs-3 text-opacity-50 text-dark">Ellos nos eligieron:</p>

      <div class="container shadow-sm">
        <div class="row align-items-start opacity-75 rounded-pill m-auto">
          <div class="col">
            <img src="./specificimg/drdog.jpg" class="img-fluid rounded" />
          </div>
          <div class="col">
            <img src="./specificimg/petcare.jpg" class="img-fluid" />
          </div>
          <div class="col">
            <img src="./specificimg/royalcanin.jpg" class="img-fluid" />
          </div>
          <div class="col">
            <img src="./specificimg/carevet.jpg" class="img-fluid" />
          </div>
          <div class="col">
            <img src="./specificimg/veterinaire.jpg" class="img-fluid rounded" />
          </div>
        </div>  
      </div>

      <Footer/>
    </div>

  )
}

export default Home