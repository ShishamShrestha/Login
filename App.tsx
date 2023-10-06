

import React from 'react';

import {

  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  TextInput,
  useColorScheme,
  View,
  FlatList,

} from 'react-native';
import Practice from './src/routes/Practice';
// import Header from '../UI/src/Header';
import HomeStack from './src/routes/HomeStack';
function App(): JSX.Element {
  const users = [
    {
      id: 1,
      name: "Sam",
    },
    {
      id: 2,
      name: "Shisham",
    },
    {
      id:3,
      name:"Sam",

   },
   {
    id:4,
    name:"Sam",

 },
 {
  id:5,
  name:"Sam",

}
  ]
  return (
    <Practice/>
    // <View>
    //   {/* <Header/> */}
    //   {/* <HomeStack/> */}
    //   <Text style={{ fontSize: 30 }}>Hello</Text>
    //   <FlatList
    //   data={users}
    //   renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
    //   keyExtractor={item=>item.id}
    //   />
    // </View>
  )
}

const styles = StyleSheet.create({

item:{
  fontSize:20,
  padding:5,
  color:'#fff',
  backgroundColor:'#000',
  borderWidth:1,
  borderColor:'red',
  margin:10,
  fontWeight:'bold'
}
  // container: {
  //   flex: 1,
  //   // alignItems:'center'
  //   padding: 16
  // },
  // txt: {
  //   fontSize: 19,
  //   fontWeight: 'bold',
  //   height: '5%'
  // },
  // Login: {
  //   fontSize: 32,
  //   fontWeight: 'bold',
  //   height: '40%',
  //   alignSelf: 'center'
  // },
  // pass: {
  //   // alignItems:'right',
  //   marginLeft: '70%',
  //   height: '10%'
  // }


});

export default App;
