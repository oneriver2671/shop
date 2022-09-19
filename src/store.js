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
    addCount(state, id){
      state.forEach(item => {
        if(item.id == id.payload){
          
          item.count += 1;
        }
      })
    }
  }
})

export let { addCount } = userStoreArr.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    userStoreArr: userStoreArr.reducer
  }
})