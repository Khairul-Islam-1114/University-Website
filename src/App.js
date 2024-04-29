import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle_1='O u r' subtitle_2='P r o g r a m s' main_title='What We Offers'/>
        <Programs />
        <About />
        <Title subtitle_1='C a m p u s' subtitle_2='G a l l e r y' main_title='Campus Photos'/>
        <Campus />
        <Testimonials />


      </div>
    </div>
  )
}

export default App;