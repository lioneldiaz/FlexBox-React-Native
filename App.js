import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Flexbox extends Component {
  constructor(){
    super()
    this.state = { isShow: 0 }
    setInterval(() => {
      this.setState( 
       { isShow: getRandomInt(4)}
      )
    }, 1000)
  }
  render() {
    return (  
      <View style={
        this.state.isShow === 0 
        ? styles.container1 
        : this.state.isShow === 1 
        ? styles.container2 
        : this.state.isShow === 2
        ? styles.container3
        : styles.container4}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  container4: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    margin: 10,   
  }
})

export default Flexbox