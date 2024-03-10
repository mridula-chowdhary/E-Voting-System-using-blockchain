import React from 'react'
import Navbar from '../Components/Navbar'
import { CtaOne } from '../Components/Banner/Banner'
import { Card } from '../Components/Card'
import { FooterThree } from '../Components/Footer'

function Homepages() {
  return (
    <div>
      <Navbar/>
      <CtaOne/>
      <Card/>
     <FooterThree/>
    </div>
  )
}

export default Homepages
