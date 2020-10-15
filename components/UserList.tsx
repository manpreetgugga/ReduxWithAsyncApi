import React from 'react';

import { connect } from 'react-redux';
import { actions } from '../reducers/userReducer'
import { ActivityIndicator, Text, View} from 'react-native';
import { deleteUser, userCreatePost, userList, userListWithQueryParam} from '../services/ApplicationApis' 
import { fetchRequestConfig, hitServer, defaultState } from '../services/ApiHelper' 
export  class UserList extends React.Component {

  constructor(props){
    super(props)
    this.state = defaultState
  }  

  fetchUsersList (props)  {

       // Simple Get request
      hitServer(fetchRequestConfig(userList),props)

      // Simple Get request with query
      // userListWithQueryParam.queryParams = {page :"12"}
      // hitServer(fetchRequestConfig(userListWithQueryParam),props)

      // Simple Post Request
      // userCreatePost.requestBody = {name:"Manpreet",job:"Android"}
      // hitServer(fetchRequestConfig(userCreatePost),props)

      // deleteUser.requestPath += '678'
      // hitServer(fetchRequestConfig(deleteUser),props)

      // Simple Put Request
      // userUpdatePut.requestPath += '633'
      // userUpdatePut.requestBody = {name:"MMMMManpreet singH",job:"Android"}
      // hitServer(fetchRequestConfig(userUpdatePut),props)
  
    // setTimeout(function(){
    //     console.log('fetch')
    //     props.loading()
    //     console.log(actions.isLoadingState)

    
    //     axios.get('https://reqres.in/api/users?page=2')
    //     .then(response => {
    //         console.log('complete')
    //         props.complete(JSON.stringify(response))
    //     })
    //     .catch(error => {
    //         console.log('fail')
    //         props.loading(error)
    //     });
    // }, 3000);
    }
  
 componentDidMount() {
    console.log('mount')  
    this.fetchUsersList (this.props)
  }

     

   apiInLoadingState(){
     this.props.loading
   }

   apiResultSuccessState(data:string){
    this.props.complete(data)
   }

   apiResultFail(error:string){
    this.props.fail(error)
   }


  render(){
      let component
      if(this.props.isLoading){
         component = <ActivityIndicator size="large" color="#00ff00" />
      }else {
        component = <Text>{this.props.data}</Text>
      }

    return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {component}
      </View>
    );
  }
}

const mapStateToProps = (state) =>( 
    {
        isLoading : state.reducer.isLoading,
        error : state.reducer.error,
        data : state.reducer.data
    }
);

const mapDispatchToProps = (dispatch) =>({ 
   loading : ()=> dispatch(actions.isLoadingState()), 
   complete: (data)=> dispatch(actions.onFetchComplete(data)),
   fail:(error)=>dispatch(actions.onFetchError(error))
});

  
export default connect(mapStateToProps,mapDispatchToProps)(UserList)
  

