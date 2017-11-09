import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { black, white, gray } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'

class NewCard extends Component {
  state = {
    selectedDeck: '',
    question: '',
    answer: ''
  }
  addCard = () => {
    
  }
  render() {
    const { cardId } = this.props.navigation.state.params
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate(
            'IndividualDeck',
            { cardId }
          )}>
            <Ionicons name='ios-arrow-round-back' size={50} style={styles.arrow}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.headerText}>Add Card</Text>
        </View>
        <View style={styles.container}>
          <TextInput 
            style={styles.input}
            onChangeText={(question) => this.setState({ question })}
            value={this.state.question}
            placeholder="Enter the Question"
          />
          <TextInput 
            style={styles.input}
            onChangeText={(answer) => this.setState({ answer })}
            value={this.state.answer}
            placeholder="Enter the Answer"
          />
          <TouchableOpacity style={styles.button} onPress={this.addCard}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: black,
    flexDirection: 'row'
  },
  arrow: {
    marginLeft: 20,
    marginTop: 10,
    color: white
  },
  headerText: {
    color: white,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20
  },
  input: {
    height: 40, 
    borderColor: gray, 
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    marginBottom: 20,
    alignSelf: 'stretch'
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

export default NewCard