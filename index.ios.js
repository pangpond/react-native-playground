import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

import Button from './src/components/Button'

export default class reactNativePlayground extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      label: {
        buttonA: 'Button A',
        buttonB: 'Button B',
      },
      bgColor: {
        buttonB: '#3273dc',
      },
    }
  }
  render() {
    const { label } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Button
            bgColor={this.state.bgColor.buttonA || null}
          >{label.buttonA}</Button>
          <Button
            bgColor="#3273dc"
            onPress={() =>
            this.setState({
              label: {
                buttonA: 'Button A props Changed',
                buttonB: 'Button B',
              },
              bgColor: {
                buttonA: '#3273dc',
                buttonB: '#3273dc',
              },
            })}
          >{label.buttonB}</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('reactNativePlayground', () => reactNativePlayground)
