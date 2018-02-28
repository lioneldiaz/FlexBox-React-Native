import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class Flexbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    margin: 10,    
  }
})

export default Flexbox