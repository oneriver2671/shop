import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import {test01, test02} from './data.js';
import data from './data.js';

function App() {

  let [shoesArr, setShoesArr] = useState(data);

  return (
    <div className="App">
      
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">한강몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#menu">메뉴</Nav.Link>
            <Nav.Link href="#join">회원가입</Nav.Link>
            <Nav.Link href="#login">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <Container>
        <Row>
          {
            shoesArr.map(function(shoes, i){
              return (
                <ShoesCard shoes={shoes} key={i}></ShoesCard>
              )
            })
          }
        </Row>
      </Container>
     
    </div>
  );
}

// 컴포넌트
function ShoesCard(props){
  return(
    <Col className='shoes'>
      <img src={props.shoes.imageSrc} width="80%"></img>
      <h4 className='shoes_title'>{props.shoes.title}</h4>
      <p className='shoes_price'>{props.shoes.price}</p>
      <p className='shoes_content'>{props.shoes.content}</p>
    </Col>
  )
}

export default App;
