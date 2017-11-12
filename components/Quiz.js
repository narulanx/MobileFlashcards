import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { black, white, gray, green, red, blue } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import { getDeck } from '../utils/helpers'

class Quiz extends Component {
  state = {
    questions: [],
    correct: 0,
    incorrect: 0,
    questionView: true,
    index: 1
  }

  toggleQuestionView() {
    const { questionView } = this.state
    this.setState({
      questionView: !questionView
    })
  }

  nextQuestion(result) {
    const { index, correct, incorrect } = this.state
    this.setState({
      index: index+1,
      correct: result === 'correct' ? correct+1 : correct,
      incorrect: result === 'incorrect' ? incorrect+1 : incorrect,
      questionView: true
    })
  }

  restartQuiz() {
    this.setState({
      correct: 0,
      incorrect: 0,
      questionView: true,
      index: 1
    })
  }

  componentDidMount() {
    const { cardId } = this.props.navigation.state.params
    getDeck(cardId).then((deck) => {
      this.setState({ 
        questions: deck.questions
      })
    })
  }

  render() {
    const { cardId } = this.props.navigation.state.params
    const { index, questions, correct, incorrect, questionView } = this.state
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate(
            'IndividualDeck',
            { cardId }
          )}>
            <Ionicons name='ios-arrow-round-back' size={50} style={styles.arrow}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.headerText}>Quiz</Text>
        </View>
        {!(index > questions.length) > 0  
          ? <View style={{flex: 1}}>
              <Text style={styles.deckNumber}>{index} / {this.state.questions.length}</Text>
              <View style={styles.container}>
                {(questionView) 
                ? <View>
                    <Text style={styles.questionAnswerText}>{questions[index-1].question}</Text>
                    <TouchableOpacity style={styles.flipButton}
                      onPress={() => {this.toggleQuestionView()}}
                    >
                      <Text style={styles.flipText}>Show Answer</Text>
                    </TouchableOpacity>
                  </View>
                : <View>
                    <Text style={styles.questionAnswerText}>{questions[index-1].answer}</Text>
                      <TouchableOpacity style={styles.flipButton}
                        onPress={() => {this.toggleQuestionView()}}
                      >
                        <Text style={styles.flipText}>Show Question</Text>
                      </TouchableOpacity>
                  </View>
                }
                <TouchableOpacity style={styles.correctButton}
                  onPress={() => {this.nextQuestion('correct')}}
                >
                  <Text style={styles.btnText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.incorrectButton}
                  onPress={() => {this.nextQuestion('incorrect')}}
                >
                  <Text style={styles.btnText}>Incorrect</Text>
                </TouchableOpacity>
              </View>
            </View>
          : <View style={styles.container}>
              {correct === questions.length
              ? <Text style={styles.questionAnswerText}>Good Job!</Text>
              : <Text style={styles.questionAnswerText}>Nice Try!</Text>
              }
              <Text style={styles.questionAnswerText}>You got {correct} out of {questions.length} correct answers.</Text>
              <TouchableOpacity style={styles.hollowButton}
                onPress={()=>this.props.navigation.navigate(
                  'Home'
                )}
              >
                <Text style={styles.hollowBtnText}>Back to Deck</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.solidButton}
                onPress={() => {this.restartQuiz()}}
              >
                <Text style={styles.solidBtnText}>Restart Quiz</Text>
              </TouchableOpacity>
            </View>
        }
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
  deckNumber: {
    marginLeft: 20,
    marginTop: 10
  },
  container: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  questionAnswerText: {
    fontSize: 40,
    textAlign: 'center'
  },
  flipButton: {
    height: 15,
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    borderRadius: 5
  },
  correctButton: {
    backgroundColor: green,
    height: 40,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    borderRadius: 5
  },
  incorrectButton: {
    backgroundColor: red,
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

export default Quiz