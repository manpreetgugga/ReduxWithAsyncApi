import React from 'react';
import { Text, View, Button} from 'react-native';


export default class HomeScreen extends React.Component{


  render(){
    const { navigation:navigate } = this.props;

    return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Fetch Users List</Text>
        <View style={{margin:10}}>
        <Button title = "Fetch" onPress = {()=> navigate.navigate('usersList')}/>
        </View>
      </View>
    );
  }
}
