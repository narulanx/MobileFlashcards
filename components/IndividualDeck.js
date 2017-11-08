import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { getDeck } from '../utils/helpers'
import { gray, black, white } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'

class IndividualDeck extends Component {
  state = {
    title: '',
    count: ''
  }
  componentDidMount() {
    const { cardId } = this.props.navigation.state.params
    getDeck(cardId).then((deck) => {
      this.setState({ 
        title: deck.title,
        count: deck.questions.length 
      })
    })
  }
  render() {
    const { title, count } = this.state
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrow}><Ionicons name='ios-arrow-round-back' size={50} color={white} /></TouchableOpacity>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={styles.subHeaderText}>{count} cards</Text>
          <TouchableOpacity style={styles.hollowButton}>
            <Text style={styles.hollowBtnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.solidButton}>
            <Text style={styles.solidBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: black
  },
  arrow: {
    marginLeft: 20,
    marginTop: 10
  },
  headerText: {
    color: white
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  headerText: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center'
  },
  subHeaderText: {
    height: 40, 
    borderColor: gray, 
    textAlign: 'center'
  },
  hollowButton: {
    height: 40,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: black,
    borderWidth: 1
  },
  hollowBtnText: {
    color: black,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  solidButton: {
    backgroundColor: black,
    height: 40,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5
  },
  solidBtnText: {
    color: white,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  }
})

export default IndividualDeck