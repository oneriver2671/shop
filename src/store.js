import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice.js';


let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
})

// 과제: 장바구니 data 사용
let _userStoreArr = [{id : 0, name : 'White and Black', count : 2}, {id : 2, name : 'Grey Yordan', count : 1}]; 
let userStoreArr = createSlice({
  name: 'userStoreArr',
  initialState: _userStoreArr,
  reducers: {
    // 상품 갯수 추가 (cart 페이지)
    addCount(state, id){
      let index = state.findIndex(item => { return item.id === id.payload });
      state[index].count += 1;
    },
    // 장바구니에 항목 추가 (detail 페이지 - 주문하기btn)
    addItem(state, newItem){
      state.push(newItem.payload);
      alert('장바구니에 항목이 추가되었습니다.');
    }
  }
})

export let { addCount, addItem } = userStoreArr.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    userStoreArr: userStoreArr.reducer
  }
})