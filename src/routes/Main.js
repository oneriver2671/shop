import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import ShoesCard from '../components/ShoesCard.js';
import axios from 'axios';

// 메인페이지 컴포넌트
const Main = (props) => {

  let [clickNum, setClickNum] = useState(0);

  function getData2(){
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then(response => {
      /**1. 내가 한 방식 */
      // let newShoesArr = [...props.shoesArr]
      // response.data.forEach(item => {
      //   newShoesArr.push(item)
      // })

      /**2번 방식 - concat() 활용 */
      // const newShoesArr = props.shoesArr.concat(response.data)

      /**3번 방식 - ES6문법으로 concat() 대체 */
      const newShoesArr = [...props.shoesArr, ...response.data];
      

      // App.js의 state 변경
      props.setShoesArr(newShoesArr);
    })
    .catch(error => {
      alert('잠시 후 다시 시도하여 주세요.');
    })
  }

  function getData3(){
    axios.get('https://codingapple1.github.io/shop/data3.json')
      .then(response => {
        const newShoesArr = [...props.shoesArr, ...response.data];
        props.setShoesArr(newShoesArr);
      })
      .catch(error => {
        alert('잠시 후 다시 시도하여 주세요.');
      })
  }

  return(
    <>
      <div className='main-bg'></div>
      <Container>
        <Row>
          {
            props.shoesArr.map(function(shoes, i){
              return (
                <ShoesCard shoes={shoes} key={i}></ShoesCard>
              )
            })
          }
      </Row>
      </Container>

      <button onClick={()=>{
        // 버튼 2번 누를 시 'data3.json' 가져오도록. (Tip: 버튼 눌린 횟수가 저장되어 있으면 좋을 듯.)
        setClickNum(clickNum + 1);
        
        switch(clickNum){
          case 0:
            getData2();
            break;
          case 1:
            getData3();
            break;
        }
      }}>아이템 목록 추가 버튼</button>
    </>
  )
}

export default Main;