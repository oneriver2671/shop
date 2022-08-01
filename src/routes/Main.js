import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import ShoesCard from '../components/ShoesCard.js';
import data from '../data.js';
import { test01, test02 } from '../data.js';

// 메인페이지 컴포넌트
function Main(props){

  let [shoesArr, setShoesArr] = useState(data);

  return(
    <>
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
    </>
  )
}

export default Main;