import { useLocation, useParams } from "react-router-dom";

// 상세페이지 컴포넌트
function Detail(){

  // 라우터의 파라미터를 가져옴
  let {id} = useParams();

  // 1. useLocation() 훅 취득
  const location = useLocation();

  // 2. location.state에서 파라미터 취득
  const shoes = location.state;

  return(
   <div className="container">
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
   </div>
  )
}

export default Detail;