import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { gray } from '../utils/colors'
import { Card } from 'react-native-elements'
import { getDecks } from '../utils/helpers'

class Decks extends Component {
  state = {
    decks: {}
  }
  componentDidMount () {
    getDecks().then((decks) => {
      this.setState({ decks })
    })
  }
  render() {
    const { decks } = this.state
    const deck_keys = decks ? Object.keys(decks) : [];
    return (
      <ScrollView style={styles.container}>
        { deck_keys.length === 0 
          ? <View style={styles.deck}>
              <Text style={styles.deckText}>No Decks created!</Text>
            </View> 
          : decks && deck_keys.map((deck) => (
            <View key={decks[deck].title} style={styles.deck}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate(
                'IndividualDeck',
                { cardId: deck })}
              >
                <Text style={styles.deckHeader}>{decks[deck].title}</Text>
                <Text style={styles.deckText}>{decks[deck].questions.length} cards</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'column'
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