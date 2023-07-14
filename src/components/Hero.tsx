import React from 'react'
import Image from 'next/image'
import ContactForm from './ContactForm'

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          alt='profile'
          width={500}
          height={500}
          priority
          src="/fish2.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Hi, I&apos;m Atlas McKinley</h1>
          <div className='py-6'>
            <p className="">I&apos;m a software engineer working for the University of Montana IT department based out of Missoula, Montana.</p>
            <p className="">I&apos;m passionate about wildlife and wild places.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Hero
