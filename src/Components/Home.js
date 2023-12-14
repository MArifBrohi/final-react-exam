// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState,React } from 'react';
import {
  Button, Navbar, Container, Nav, NavDropdown, Form,

  Row, Col, Image, Card




}


  from 'react-bootstrap';

const Home = () => {

    const [count,setcounter]=useState(0)
    function updateCount(){
      setcounter(count+1)
    }
    function actionCall(){
      alert('Search is not in process')
    }
  return (
    <div>

       <Navbar expand="lg" bg='dark' variant='dark'>
        <Container fluid>
          <Navbar.Brand href="#">Massive|Design</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Features" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary" onClick={actionCall}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <main>
        <Container>
          <Row className='px-4 my-5'>
            <Col sm={7}>
              <Image src="https://source.unsplash.com/900x400/?nature,water" fluid rounded />

            </Col>
            <Col sm={5}>
              <h1 class='font-weight-light '>Tagline</h1>
              <p class='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vitae voluptates rem ratione quaerat quo facere atque, enim praesentium velit illo, a sint similique illum ipsum, minus perspiciatis amet est.</p>
              <Button variant="outline-primary">Proceed</Button>

            </Col>
          </Row>
          <Row>
            <Card className='bg-secondary text-white text-center my-5 py-2'>
              <Card.Body>Sukkur IBA University is nothing but a simple University: Rating {count}</Card.Body>
            </Card>
            
          </Row>
          <Button onClick={updateCount}>Thuumbs Up!</Button>

          <Row>
            <Col className='mt-4'>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://source.unsplash.com/900x400/?schools,university" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


            </Col>

            <Col className='mt-4'>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://source.unsplash.com/900x400/?girls,women" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


            </Col>

            <Col className='mt-4'>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://source.unsplash.com/900x400/?hotgirls,sexygirls" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


            </Col>


          </Row>

        </Container>



      </main>

    </div>
  );
}

export default Home;
