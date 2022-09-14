import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { Col, Nav } from 'react-bootstrap';
import {Context1} from '../App.js';

// 상세페이지 컴포넌트
function Detail(props){

  // Context 사용하기
  let {재고} = useContext(Context1);
  console.log({재고});

  let [isVisible, setIsVisible] = useState(true);
  let [count, setCount] = useState(0);
  let {id} = useParams();   // 라우터의 파라미터를 가져옴
  let [tabNum, setTabNum] = useState(0);

  // mount, update 시 useEffect 안의 코드가 실행됨.
  useEffect(()=>{
      // 2초 후에 실행할 코드
      setTimeout(() => {
      setIsVisible(false);
    }, 2000)
  })

  // find() 함수: 배열에서 특정 조건의 값을 가진 요소가 있을 때, 그 배열에서 첫번째로 일치하는 값을 리턴.
  // 넘어온 param값으로 바로 바인딩하면 배열의 순서에 따라 바인딩하는 것이 되어버림.
  // 그거말고 data 안에 있는 고유의 id로 바인딩해야 함.
  const shoes = props.shoesArr.find(element => element.id == id);

  // 예외처리: 잘못된 파라미터로 넘어온 상황
  if(!shoes){
    return(
      <div>존재하지 않는 페이지입니다. 404에러.</div>
    )
  }

  /* Main.js에서 shoesArr 상태관리 했을 때 썼던 방법. 지금은 App.js로 옮김 */
  // 1. useLocation() 훅 취득
  // const location = useLocation();

  // 2. location.state에서 파라미터 취득
  // const shoes = location.state;


  // 2초 뒤에 사라지는 컴포넌트
  function DiscountBar(){
    return(
      <div className="alert alert-warning">
      2초 이내 구매 시 할인
      </div>
    )
  }

  return(
   <div className="container">

    { isVisible ?  <DiscountBar /> : null }

    <div className="row">
      <div className="col-md-6">
        <img src={ shoes.imageSrc } width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{ shoes.title }</h4>
        <p>{ shoes.detail }</p>
        <p>{ shoes.price }원</p>
        <button className="btn btn-danger">주문하기</button>
      </div>
    </div>

    {/**defaultActiveKey: 초기값 세팅 */}
    <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTabNum(0)}}>상세설명</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTabNum(1)}}>상품후기</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTabNum(2)}}>자주하는 질문</Nav.Link>
        </Nav.Item>
    </Nav>

    <div>
      <TabContent tabNum={tabNum}></TabContent>
    </div>
    
  </div>
  )
}

/**탭 컴포넌트 */
function TabContent(props){

  // Context 사용하기
  let {재고} = useContext(Context1);
  console.log({재고});

  // tab state가 변할 때 end를 부착
  let [fade, setFade] = useState('');

  // props.tabNum의 변화 감지
  // fade라는 state가 'end'로 변경됨
  useEffect(()=>{
    setFade('end'); 
    
    return()=>{ 
      setFade(''); 
    }
  }, [props.tabNum])


  if (props.tabNum == 0){
    return (<div className={'start ' + fade}>상세설명입니다.</div>)
  }
  else if (props.tabNum == 1){
    return (<div className={'start ' + fade}>상품후기 불라불라 너무 좋아요~~</div>)
  }
  else if (props.tabNum == 2){
    return (<div className={'start ' + fade}>이것이 궁금합니다.</div>)
  }
}

export default Detail;