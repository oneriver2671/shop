import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './routes/Detail.js';
import Main from './routes/Main.js';

function App() {

  return (
    <div className="App">
      
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">한강몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/menu">메뉴</Nav.Link>
            <Nav.Link href="/join">회원가입</Nav.Link>
            <Nav.Link href="/login">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/detail" element={<Detail></Detail>} />
      </Routes>
     
    </div>
  );
}


export default App;
