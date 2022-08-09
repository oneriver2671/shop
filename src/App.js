import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import Main from './routes/Main.js';
import data from './data.js';

function App() {

   // Main.js에서 shoesArr 상태를 관리하고 싶었으나, Route를 통해 detail페이지로도 상태가 이동해야 해서 실패.
  let [shoesArr, setShoesArr] = useState(data);   // App -> Detail로 전송
  let navigate = useNavigate();

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
        <Route path="/" element={<Main shoesArr={shoesArr}></Main>} />
        <Route path="/detail/:id" element={<Detail shoesArr={shoesArr}></Detail>} />  {/**애초에 넘길 때 배열이 아니라, 1개만 넘기진 못하나? */}

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

