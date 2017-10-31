import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { black, white, gray } from '../utils/colors'
import { saveDeckTitle } from '../utils/helpers'

class NewDeck extends Component {
  state = {
    text: ''
  }
  addDeck = () => {
    saveDeckTitle(this.state.text)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder="Deck Title"
        />
        <TouchableOpacity style={styles.button} onPress={this.addDeck}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40, 
    borderColor: gray, 
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    marginBottom: 20
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center'
  },
  container: {
    paddingLeft: 30,
    paddingRight: 30
  },
  button: {
    backgroundColor: black,
    height: 40,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5
  },
  btnText: {
    color: white,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  }
})

export default NewDeck