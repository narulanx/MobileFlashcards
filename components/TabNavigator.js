import { TabNavigator } from 'react-navigation'
import Decks from './Decks'
import NewDeck from './NewDeck'

// Tab Navigator for Decks and adding a new deck
export const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    } 
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-playing-outline' size={30} color={tintColor} />
    } 
  }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true
})