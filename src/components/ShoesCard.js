import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// 상품목록 컴포넌트
function ShoesCard(props){
  return(
    <Col className='shoes'>
      <Link to="/detail"><img src={props.shoes.imageSrc} width="80%"></img></Link>
      <h4 className='shoes_title'>{props.shoes.title}</h4>
      <p className='shoes_price'>{props.shoes.price}</p>
      <p className='shoes_content'>{props.shoes.content}</p>
    </Col>
  )
}

export default ShoesCard;