import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { MainNavigator } from './components/StackNavigator'
import { white, black } from './utils/colors'
import { Constants } from 'expo'
import { setLocalNotification } from './utils/helpers'

// Status Bar on the mobile application
function FlashcardStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  componentDidMount() {
    // Sets the local notification when the application loads
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
