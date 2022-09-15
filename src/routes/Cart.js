import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart(){

  // useSelector: Redux store를 가져와줌
  let test = useSelector((state) => { return state.stock });
  let userStoreItemArr = useSelector((state) => { return state.userStoreArr });

  return(
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>상품 코드</th>
          <th>상품명</th>
          <th>갯수</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        { 
          userStoreItemArr.map(function(item){
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>oneriver</td>
              </tr>
            )
          }) 
        }
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Cart;