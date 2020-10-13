import React from 'react';

import { connect } from 'react-redux';
import axios from 'react-native-axios';
import { ActivityIndicator, Text, View} from 'react-native';

import { actions } from '../reducers/userReducer'



export  class UserList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        isLoading : true,
        error: '',
        data : 'initial text'
    }
  }  

  fetchUsersList (props)  {
    setTimeout(function(){
        console.log('fetch')
        props.loading()
        console.log(actions.isLoadingState)
    
        axios.get('https://reqres.in/api/users?page=2')
        .then(response => {
            console.log('complete')
            props.complete(JSON.stringify(response))
        })
        .catch(error => {
            console.log('fail')
            props.loading(error)
        });
    }, 3000);
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
  

