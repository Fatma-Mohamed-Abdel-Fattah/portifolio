import React from 'react'
import myImg from '../../assets/images/img-5-lAucr__a.jpg'
export default function About() {
  return (
    <>
    <section className='vh-100  w-75 m-auto'>
    <div className="container ">
      <p className='pt-5'>ABOUT US</p>
      <h2 className='my-3'>WHO AM I?</h2>
      <p className='my-3'><span className='fw-bold'>Hi Im Jackson Ford</span> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>
     <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
     </div>
     <div className="container">
  <div className="row">
    <div className="col-md-3">
      <div className='about-info p-4 shadow-lg'>
        <i className="fa-solid fa-lightbulb fa-2x " />
        <p>Graphic Design</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className='about-info p-4 shadow-lg'>
        <i className="fa-solid fa-earth-africa fa-2x" />
        <p>Web Design</p></div>
    </div>
    <div className="col-md-3">
      <div className='about-info p-4 shadow-lg'>
      <i className="fa-solid fa-database fa-2x" />
        <p>Software</p></div>
    </div>
    <div className="col-md-3">
      <div className='about-info p-4 shadow-lg'>
        <i className="fa-solid fa-mobile-screen-button fa-2x" />
        <p>Application</p>
      </div>
    </div>
  </div>
</div>
    </section>
   

     {/* <img src={myImg} alt="ing" /> */}
    </>
  )
}
