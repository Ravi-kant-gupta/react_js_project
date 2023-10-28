import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataList: [],
  name:"",
  password:"",
  selectedTabItem:"analytics",
  passwordType:"password",
  isTab:false,
  showError:false
}
export const counterSlice = createSlice({
  name: 'dataList',
  initialState,
  reducers: {
    initialApi:(state,action)=>{
        console.log(`initial data ${action.payload[1].id}`)
       state.dataList=action.payload
    },

    selectMethod:(state,action)=>{
      state.selectedTabItem=action.payload
    },
    username:(state,action)=>{
      state.name=action.payload
    },
    userpassword:(state,action)=>{
      state.password=action.payload
    },
    typeOfPassword:(state,action)=>{
      state.passwordType=action.payload
    },
    showSidetab:(state,action)=>{
      state.isTab=action.payload
    },
    errorMetthod:(state,action)=>{
      state.showError=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { initialApi,selectMethod,username,userpassword,typeOfPassword,showSidetab,errorMetthod} = counterSlice.actions

export default counterSlice.reducer