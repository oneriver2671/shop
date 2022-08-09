import { useLocation, useParams } from "react-router-dom";

// 상세페이지 컴포넌트
function Detail(props){

  // 라우터의 파라미터를 가져옴
  let {id} = useParams();


  // find() 함수: 배열에서 특정 조건의 값을 가진 요소가 있을 때, 그 배열에서 첫번째로 일치하는 값을 리턴.
  // 넘어온 param값으로 바로 바인딩하면 배열의 순서에 따라 바인딩하는 것이 되어버림.
  // 그거말고 data 안에 있는 고유의 id로 바인딩해야 함.
  const shoes = props.shoesArr.find(element => element.id == id);


  /* Main.js에서 shoesArr 상태관리 했을 때 썼던 방법. 지금은 App.js로 옮김 */
  // 1. useLocation() 훅 취득
  // const location = useLocation();

  // 2. location.state에서 파라미터 취득
  // const shoes = location.state;

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