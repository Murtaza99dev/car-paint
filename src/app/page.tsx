import Image from 'next/image'
import Navbar from 'components/navbar'
import Main from 'components/home'
import Points from 'components/points'
import About from 'components/about'
import Package from 'components/Member'
import Testimonial from 'components/testimonial'
import Portfolio from 'components/portfolio'
import Free from 'components/free'
import Contact from 'components/contact'
import Services from 'components/services'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Points/>
      <Services/>
      <About/>
      <Package/>
      <Portfolio/>
      <Testimonial/>
      <Free/>
      <Contact/>
    </div>
  )
}
