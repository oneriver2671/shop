import { Container, Row } from 'react-bootstrap'
import ShoesCard from '../components/ShoesCard.js'
import axios from 'axios'

// 메인페이지 컴포넌트
const Main = (props) => {

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
      axios.get('https://codingapple1.github.io/shop/data2.json')
        .then(response => {
          let newShoesArr = [...props.shoesArr]
          response.data.forEach(item => {
            newShoesArr.push(item)
          })

          // App.js의 state 변경
          props.setShoesArr(newShoesArr)
        })
        .catch(error => {
          alert('잠시 후 다시 시도하여 주세요.')
        })
    }}>아이템 목록 추가 버튼</button>
    </>
  )
}

export default Main;