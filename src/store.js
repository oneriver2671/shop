import { configureStore, createSlice } from "@reduxjs/toolkit";


// useState() 역할과 비슷. state 하나를 slice라고 부름.
let user = createSlice({
  name: 'user',
  initialState: 'jang'
})

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
})

// 과제: 장바구니 data 사용
let _userStoreArr = [{id : 0, name : 'White and Black', count : 2}, {id : 2, name : 'Grey Yordan', count : 1}]; 
let userStoreArr = createSlice({
  name: 'userStoreArr',
  initialState: _userStoreArr
})


export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    userStoreArr: userStoreArr.reducer
  }
})