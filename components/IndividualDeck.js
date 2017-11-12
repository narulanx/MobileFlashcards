import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { getDeck } from '../utils/helpers'
import { gray, black, white } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'

class IndividualDeck extends Component {
  state = {
    title: '',
    count: '',
    springValue: new Animated.Value(0.3)
  }

  componentWillUnmount() {
    this.state.springValue.removeAllListeners()
  }

  componentDidMount() {
    // Get the details of an individual deck and then set its properties to the local state
    const { cardId } = this.props.navigation.state.params
    const { springValue } = this.state
    getDeck(cardId).then((deck) => {
      this.setState({ 
        title: deck.title,
        count: deck.questions.length 
      })
    })
    Animated.sequence([
      Animated.timing(springValue, { toValue: 1.04, duration: 500 })
    ]).start()
  }

  render() {
    const { title, count, springValue } = this.state
    const { cardId } = this.props.navigation.state.params
    const disabled = count > 0?false:true
    const button = count > 0?'solidButton':'disabledButton'
    return (
      <Animated.View style={[{flex: 1}, {transform: [{scale: springValue}]}]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
            <Ionicons name='ios-arrow-round-back' size={50} style={styles.arrow}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.containerHeaderText}>{title}</Text>
          <Text style={styles.subHeaderText}>{count} cards</Text>
          <TouchableOpacity style={styles.hollowButton} onPress={()=>this.props.navigation.navigate(
            'NewCard',
            { cardId }
          )}>
            <Text style={styles.hollowBtnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={disabled} style={styles[button]} onPress={()=>this.props.navigation.navigate(
            'Quiz',
            { cardId }
          )}>
            <Text style={styles.solidBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  containerHeaderText: {
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
  disabledButton: {
    backgroundColor: gray,
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