import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, addAge } from '../store/userSlice.js';
import { addCount } from '../store.js';

function Cart(){

  // useSelector: Redux store를 가져와줌
  let user = useSelector((state) => { return state.user });
  let userStoreItemArr = useSelector((state) => { return state.userStoreArr });
  
  let dispatch = useDispatch();

  return(
    <div>
      <div>{user.name}의 장바구니</div>
      <div>{user.name}의 나이 : {user.age}</div>
      <button onClick={()=>{
        dispatch(addAge(10))
      }}>버튼</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>상품 코드</th>
            <th>상품명</th>
            <th>갯수</th>
            <th>버튼</th>
          </tr>
        </thead>
        <tbody>
          { 
            userStoreItemArr.map(item => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td>
                      <button onClick={()=>{
                        dispatch(addCount(item.id)) 
                    }}>+</button>
                  </td>
                </tr>
              )
            }) 
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Cart;