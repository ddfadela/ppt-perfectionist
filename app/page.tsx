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
import Head from 'next/head'

export default function Home() {
  return (
    <div>
       <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
  <div className='overflow-hidden	'>
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
  </div>
  )}
