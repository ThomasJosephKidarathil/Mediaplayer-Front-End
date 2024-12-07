import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" 
crossorigin="anonymous" referrerpolicy="no-referrer" />

function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" style={{color:"white"}}>
            <Link to='/' style={{color:'white', textDecoration:'none'}}>
            <i class="fa-solid fa-video text-warning me-3"></i>
           Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar></div>
  )
}

export default Header