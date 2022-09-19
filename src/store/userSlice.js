import { createSlice } from "@reduxjs/toolkit";

// useState() 역할과 비슷. state 하나를 slice라고 부름.
let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  // 1) state 변경 함수 생성
  reducers: {
    changeName(state){      // 인자값: 기존 state
      state.name = 'park';
    },
    addAge(state, action){
      state.age += action.payload;
    }
  }
})

// 2) state 변경 함수 export
export let { changeName, addAge } = user.actions;  // 오른쪽 자료를 변수로 빼는 문법

export default user;