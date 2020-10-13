import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DataState {
  isLoading: boolean,
  error:string,
  data:string
}

const initialState: DataState = { isLoading:true,error:'',data:'' }

const userListSlice = createSlice({
                       name : 'userList',
                       initialState,
                       reducers : {
                         isLoadingState(state){
                           console.log('loading....')
                           state.isLoading = true 
                         },
                         onFetchComplete(state,action){
                           console.log('complete...'+JSON.stringify(action))
                           state.isLoading = false
                           state.data = JSON.stringify(action) 
                         },
                         onFetchError(state,action){
                           console.log('fail...')
                           state.isLoading = false
                           state.error = JSON.stringify(action)  
                         }
                       }
                     })

export const actions = userListSlice.actions
console.log(actions)
export default userListSlice.reducer

