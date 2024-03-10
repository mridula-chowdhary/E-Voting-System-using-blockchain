import React from 'react'
import Navbar from '../Components/Navbar'
import { CtaOne } from '../Components/Banner/Banner'
import { Card } from '../Components/Card'
import { Footer } from '../Components/Footer'

function Homepages() {
  return (
    <div>
      <Navbar/>
      <CtaOne/>
      <Card/>
     <Footer/>
    </div>
  )
}

export default Homepages
