import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landingpage() {
  return (
    <>
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
        <Row>
          <Col>
            <h3 className='textStyle'>Welcome To <span className='text-warning'> Media Player</span></h3>
            <p className='textStyle' style={{ textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam amet incidunt temporibus cupiditate
              odio esse quis dolorum consequatur dolor. Molestias assumenda et commodi sequi natus quae.
              Dolore delectus asperiores hic. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam repudiandae doloribus unde consectetur asperiores, sequi laudantium voluptatem,
              eveniet odit aliquam rem sapiente, et excepturi porro quod! Id facilis aspernatur reprehenderit.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eos veniam optio atque molestiae hic,
              dolore, esse harum odit dolores ipsa quidem vero reiciendis facere, fugiat illo maiores error eveniet!</p>
            <Link to='/home'>
              <button className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right-long"></i></button>
            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5' height={'400px'} />
          </Col>
        </Row>
      </Container>
      <div className='container'>
        <h3 className='textStyle'>Features</h3>
        <div className='cards d-flex align-items-center justify-content-evenly ms-5 mb-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title className='textStyle'>Card Title</Card.Title>
              <Card.Text className='textStyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className='btn btn-warning'>Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title className='textStyle'>Card Title</Card.Title>
              <Card.Text className='textStyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className='btn btn-warning'>Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title className='textStyle'>Card Title</Card.Title>
              <Card.Text className='textStyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className='btn btn-warning'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='container mb-5 mt-5 border border-2 border-secondary p-5 rounded'>
        <Row>
          <Col>
            <h3 className='textStyle mb-4'>Simple and Powerful</h3>
            <p className='textStyle' style={{ textAlign: 'justify' }}> <span className='fs-5 fw-bolder text-warning' > Play Everything: </span>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit eum similique. 
              Veritatis, cum hic quod voluptatum id suscipit natus. Commodi exercitationem repudiandae aliquam 
              cupiditate, nostrum culpa quae minima dolorum!</p>
              <p className='textStyle' style={{ textAlign: 'justify' }}> <span className='fs-5 fw-bolder text-warning'> Play Everything: </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit eum similique. 
              Veritatis, cum hic quod voluptatum id suscipit natus. Commodi exercitationem repudiandae aliquam 
              cupiditate, nostrum culpa quae minima dolorum!</p>
              <p className='textStyle' style={{ textAlign: 'justify' }}> <span className='fs-5 fw-bolder text-warning'> Play Everything: </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit eum similique. 
              Veritatis, cum hic quod voluptatum id suscipit natus. Commodi exercitationem repudiandae aliquam 
              cupiditate, nostrum culpa quae minima dolorum!</p>
          </Col>
          <Col className='mt-5'>
          <iframe width="600" height="350" src="https://www.youtube.com/embed/AJtDXIazrMo" title="Ellie Goulding
          - Love Me Like You Do (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
           encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
           allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landingpage