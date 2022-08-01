import { Col } from 'react-bootstrap';
import { Link, useNavigate, Outlet  } from 'react-router-dom';

// 상품목록 컴포넌트
function ShoesCard(props){

  let navigate = useNavigate();

  return(
    // detail/2 -> 이런식으로 id 넘기고 싶은데.
    <Col className='shoes'>
      <img onClick={ ()=>{navigate('/detail/'+ props.shoes.id, {state: props.shoes})} } src={ props.shoes.imageSrc } width="80%"></img>
      <h4 className='shoes_title'>{ props.shoes.title }</h4>
      <p className='shoes_price'>{ props.shoes.price }</p>
      <p className='shoes_content'>{ props.shoes.content }</p>
    </Col>
  )
}

export default ShoesCard;