import { Container, Row } from 'react-bootstrap';
import ShoesCard from '../components/ShoesCard.js';

// 메인페이지 컴포넌트
function Main(props){

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
    </>
  )
}

export default Main;