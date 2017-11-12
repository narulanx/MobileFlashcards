import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { black, white, gray } from '../utils/colors'
import { saveDeckTitle, clearLocalNotification, setLocalNotification } from '../utils/helpers'

class NewDeck extends Component {
  state = {
    text: ''
  }
  addDeck = () => {
    // Save the new deck to the AsyncStorage and then clear the notification for the day
    const { text } = this.state
    saveDeckTitle(text).then(() => {
      this.props.navigation.navigate(
        'IndividualDeck',
        { cardId: text }
      )
      clearLocalNotification().then(setLocalNotification)
    })
  }
  render() {
    return (
      // KeyboardAvoidingView is used to move the screen up on display of the Keyboard
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
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
    marginBottom: 20,
    alignSelf: 'stretch'
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center'
  },
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
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