import { StackNavigator } from 'react-navigation'
import { Tabs } from './TabNavigator'
import IndividualDeck from './IndividualDeck'
import NewCard from './NewCard'
import Quiz from './Quiz'

// Stack Navigator with views for home, individual deck, new card and quiz
export const MainNavigator = StackNavigator({
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