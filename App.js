import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import IndividualDeck from './components/IndividualDeck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { white, black } from './utils/colors'
import { Constants } from 'expo'
import { setLocalNotification } from './utils/helpers'

function FlashcardStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
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

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  IndividualDeck: {
    screen: IndividualDeck
  },
  NewCard: {
    screen: NewCard
  },
  Quiz: {
    screen: Quiz
  }
}, {
  navigationOptions: {
    header: null
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <FlashcardStatusBar backgroundColor={black} barStyle="light-content" />
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
