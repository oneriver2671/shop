import { Col } from 'react-bootstrap';
import { Link, useNavigate, Outlet  } from 'react-router-dom';

// 상품목록 컴포넌트
function ShoesCard(props){

  let navigate = useNavigate();

  return(
    <Col className='shoes'>
      <img onClick={ ()=>{navigate('/detail')} } src={props.shoes.imageSrc} width="80%"></img>
      <h4 className='shoes_title'>{props.shoes.title}</h4>
      <p className='shoes_price'>{props.shoes.price}</p>
      <p className='shoes_content'>{props.shoes.content}</p>
    </Col>
  )
}

export default ShoesCard;