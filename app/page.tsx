import Image from 'next/image'
import Menu from './Component/Menu'
import React from 'react'
import Slogan from './Component/Slogan'
import Works from './Component/Works'
import About from './Component/About'
import FAQ from './Component/FAQ'
import Services from './Component/Services'
import Client from './Component/Client_Tes'
import Footer from './Component/Footer'
import Form from './Component/Form'

export default function Home() {
  return (
  <div className='overflow: hidden;
  '>
    <Menu/>
    <Slogan/>
    <Works/>
    <About/>
    <Services/>
    <Client/>
    <FAQ/>
    <Form/>
    {/* <Contact/> */}
    <Footer/>
  </div>
  )}
