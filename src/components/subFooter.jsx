import React from 'react'
import logoPage from "../assets/logoPage.png"
import facebook from "../assets/facebookIcon.svg"
import insta from "../assets/instagramIcon.svg"
import twitter from "../assets/TwiterIcon.svg"
import Ln from "../assets/LnIcon.svg"
export default function SubFooter() {
  return (
    <section className='subFooter'>
      <div className="iconAndContact">
        <img src={logoPage} alt="Dish delight" />
        <h3>The ultimate destination for food enthusiasts!</h3>
        <div className='socialMedia'>
          <img src={facebook} alt="facebook" />
          <img src={insta} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={Ln} alt="linkin" />
        </div>
      </div>
      <div className='Links Company'>
        <h2>Company</h2>
        <p>About</p>
        <p>Contact us</p>
        <p>Support</p>
      </div>
      <div className='Links QuickLink'>
        <h2>Quick Link</h2>
        <p>Share Location</p>
        <p>Food Guide</p>
        <p>FAQs</p>
      </div>
      <div className='Links Legal'>
        <h2>Legal</h2>
        <p>Terms & conditions</p>
        <p>Privacy Policy</p>
        <p>DMCA</p>
      </div>
    </section>
  )
}
