import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { black, white, gray } from '../utils/colors'

class NewDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => {console.log(text)}}
          placeholder="Deck Title"
        />
        <TouchableOpacity style={styles.button}>
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