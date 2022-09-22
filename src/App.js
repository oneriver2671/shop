import './App.css'
import { createContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'
import Main from './routes/Main.js'
import data from './data.js'
import Cart from './routes/Cart'

// Context API 사용해보기
export let Context1 = createContext();

function App() {

   // Main.js에서 shoesArr 상태를 관리하고 싶었으나, Route를 통해 detail페이지로도 상태가 이동해야 해서 실패.
  let [shoesArr, setShoesArr] = useState(data);   // App -> Detail로 전송
  let navigate = useNavigate();

  // Context API 사용해보기
  let [재고] = useState([10, 11, 12]);


  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">한강몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/menu">메뉴</Nav.Link>
            <Nav.Link href="/join">회원가입</Nav.Link>
            <Nav.Link href="/login">로그인</Nav.Link>
            <Nav.Link href="/cart">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        {/** setShoesArr: 자식->부모 컴포넌트 data 전송을 위해 setter함수를 보냄 */}
        <Route path="/" element={<Main shoesArr={shoesArr} setShoesArr={setShoesArr}></Main>} />
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ 재고, shoesArr }}>
            <Detail shoesArr={shoesArr}></Detail>
          </Context1.Provider>
        } />  {/** TODO: 애초에 넘길 때 배열이 아니라, 1개만 넘기진 못하나? */}

        {/** nested routes 과제 */}
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰 받기!</div>}></Route>
        </Route>

        {/** 장바구니 */}
        <Route path="/cart" element={<Cart></Cart>} />

        {/** 예외처리 */}
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

