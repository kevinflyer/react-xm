import { handleActions } from 'redux-actions';//对action的封装，简化写法

// export const abc = handleActions({
//     'ADD'(state, action) {
//       console.log(action);
//       return state+ parseInt(action.payload.text)  //action.payload(获取action对象)  == {type:'ADD',a :10,b:20}
//     },
//     'DEL'(state, action) {
//       return state- parseInt(action.payload.text)  //action.payload  == {type:'ADD',a :10,b:20}
//     }
//   }, 999)   //999默认值

 var data =[{
   name:'aaaaaaa',
   check:false,
   id:1
 },
 {
  name:'bbbbbbb',
  check:false,
  id:2
},
{
  name:'cccccccc',
  check:true,
  id:3
}]
  export const todoList = handleActions({
    'ADD_TODO'(state, action) {
      console.log(action);
      return [
        ...state,
        {
          id:action.payload.id, //action.payload直接获取action对象
          name:action.payload.name,
          check:action.payload.check
      }]
    },
    'DEL_TODO'(state, action) {
      return state.filter((v,i)=>v.id !== action.payload.id);
    },
    'CHANGE_TODO'(state, action){   //返回新的对象（所以要加上原有的）
      return state.map((v,id)=>{
        if(v.id === action.payload.id){
          return Object.assign(v,{check:!v.check});  //在原有对象上改变，合并
        }else {
          return v;
        }
      })
    }
  }, data)   //默认值

  const setVisibilityInit = {
    filter: 'SHOW_ALL',
  }
  export const setVisibility = handleActions({
    'SET_VISIBILITY'(state, action) {
      console.log(action.payload)
      return action.payload
    }
  }, setVisibilityInit)
