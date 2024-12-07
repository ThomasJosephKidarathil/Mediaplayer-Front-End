import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center aligin-items-center'>
      <div className='footer d-flex aligin-items-center justify-content-evenly'>
        <div style={{width:'400px'}}>
          <h5 style={{color:'red'}}><i class="fa-solid fa-video text-warning me-3"></i> Media Player</h5>
          <p className='textStyle' style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsum 
            necessitatibus quis ut debitis? Nobis soluta, dolore odit, excepturi maiores
             iste, inventore nesciunt non sequi quis magni quas minima laborum.</p>
        </div>
        <div   className='d-flex flex-column ms-3'>
          <h4 style={{color:'red'}}>Links</h4>
          <Link to='/' style={{textDecoration:'none', color:'white'}}>
          Landing Page
          </Link>
          <Link to='/home' style={{textDecoration:'none', color:'white'}}>
          Home Page
          </Link>
          <Link to='/watch' style={{textDecoration:'none', color:'white'}}>
          Watch History
          </Link>
        </div>
        <div className='d-flex flex-column ms-5'>
          <h4 style={{color:'red'}}>Guides</h4>
          <Link to='https://react.dev/' target='_blank' style={{textDecoration:'none', color:'white'}}>
          React
          </Link>
          <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:'none', color:'white'}}>
          React Bootstrap
          </Link>
          <Link to='https://v3.vitejs.dev/guide/' target='_blank' style={{textDecoration:'none', color:'white'}}>
          Vite + React
          </Link>
          <Link to='https://www.npmjs.com/package/json-server' target='_blank' style={{textDecoration:'none', color:'white'}}>
          Json Server
          </Link>
        </div>
        <div className='ms-3'>
          <h4 style={{color:'red'}}>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your email'/>
            <button className='btn btn-warning ms-3'>SUBSCRIBE</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center mt-3'>
            <Link style={{textDecoration:'none', color:'red'}}>
            <i class="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none', color:'red'}}>
            <i class="fa-brands fa-facebook fa-2x"></i>
            </Link >
            <Link style={{textDecoration:'none', color:'red'}}>
            <i class="fa-brands fa-whatsapp fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none', color:'red'}}>
            <i class="fa-brands fa-twitter fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none', color:'red'}}>
            <i class="fa-brands fa-youtube fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none', color:'red'}}>
            <i class="fa-brands fa-tumblr fa-2x"></i>
            </Link>
          </div>      
        </div>
      </div>
    </div>
  )
}

export default Footer