import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'
import { Card } from 'react-native-elements'

class Decks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.deckHeader}>udaciCards</Text>
          <Text style={styles.deckText}>3 cards</Text>
        </View>
        <View style={styles.deck}>
          <Text style={styles.deckHeader}>new deck</Text>
          <Text style={styles.deckText}>0 cards</Text>
        </View>
        <View style={styles.deck}>
          <Text style={styles.deckHeader}>New Deck 2</Text>
          <Text style={styles.deckText}>0 cards</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  deck: {
    height: 100,
    borderBottomColor: gray,
    borderBottomWidth: 1,
    paddingTop: 30
  },
  deckHeader: {
    textAlign: 'center',
    fontSize: 20
  },
  deckText: {
    textAlign: 'center',
    color: gray
  }
})

export default Decks