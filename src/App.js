import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
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
        <Route path="/detail/:id" element={<Detail></Detail>} />

        {/**nested routes 과제 */}
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰 받기!</div>}></Route>
        </Route>

        <Route path="*" element={<div>존재하지 않는 페이지입니다. 404에러.</div>}></Route>
      </Routes>
     
    </div>
  );
}

function Event(){
  return(
    <>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </>
  )
}

export default App;

