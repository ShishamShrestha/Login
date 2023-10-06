import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Practice = () => {
  return (<View>
    <View style={{}}>
      <View style={styles.first} ></View>
      <View style={styles.second} ></View>
      <View style={styles.third} ></View>
      <View style={styles.fourth} ></View>
    </View>
    <View>
        <View style={styles.bottomfirst}></View>
        <View style={styles.bottomsecond}></View>
        <View style={styles.bottomthird}></View>
        <View style={styles.bottomfourth}></View>
        
    </View>
    </View>
  )
}

export default Practice

const styles = StyleSheet.create({
    first:{
        height:160,
        width:160,
        borderRadius:20,
        backgroundColor:'red',
        marginLeft:30,
        top:20

    },
    second:{
        height:160,
        width:160,
        borderRadius:20,
        backgroundColor:'blue',
        marginLeft:220,
        top:-140
    },
    third:{
        height:160,
        width:160,
        borderRadius:20,
        backgroundColor:'#000',
        marginLeft:30,
        top:-117
    },
    fourth:{
        height:160,
        width:160,
        borderRadius:20,
        backgroundColor:'green',
        marginLeft:220,
        top:-280
    },
    bottomfirst:{
        height:140,
        width:140,
        borderRadius:20,
        backgroundColor:'brown',
        marginLeft:38,
        top:-245
    },
    bottomsecond:{
        height:140,
        width:140,
        borderRadius:20,
        backgroundColor:'crimson',
        marginLeft:38,
        top:-245
    },
    bottomthird:{
        height:140,
        width:140,
        borderRadius:20,
        backgroundColor:'purple',
        marginLeft:230,
        top:-528
    },
    bottomfourth:{
        height:140,
        width:140,
        borderRadius:20,
        backgroundColor:'cyan',
        marginLeft:230,
        top:-528
    }
})