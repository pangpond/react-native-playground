import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const defaultColor = '#00d1b2'

    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.button, { backgroundColor: this.props.bgColor || defaultColor }]}
      >
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  children: PropTypes.string,
  bgColor: PropTypes.string,
}
Button.defaultProps = {
  children: 'Button',
  bgColor: '#00d1b2',
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
})

export default Button
