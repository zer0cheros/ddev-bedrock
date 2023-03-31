import { Page } from '@/types/types'
import React from 'react'

const Hero = () => {
  return (
    <section className="hero min-h-[80vh] bg-cover bg-[url('https://wp-boilerplate.ddev.site/app/uploads/2023/03/2.17.23_main-Recovered_1944x.webp')] bg-center flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="hero-title text-6xl font-bold text-white mb-6">
          Discover the latest trends
        </h1>
        <p className="hero-subtitle text-xl text-white mb-8">
          Shop our collection of women's fashion today!
        </p>
        <button className="btn-primary text-white py-3 px-6 rounded-full font-bold uppercase tracking-wider">
          Shop Now
        </button>
      </div>
    </section>
  )
}



export default Hero