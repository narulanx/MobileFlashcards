import React from 'react'
import {AsyncStorage} from 'react-native' 

const FLASHCARD_KEY = 'MobileFlashcards:decks'

export function getDecks() {
  // return all of the decks along with their titles, questions, and answers. 
  return AsyncStorage.getItem(FLASHCARD_KEY)
    .then((data) => { 
      return JSON.parse(data)
    })
}

export function getDeck(id) {
  // return the deck associated with that id.
  return AsyncStorage.getItem(FLASHCARD_KEY)
    .then((data) => {
      const decks = JSON.parse(data)
      return decks[id]
    })
}

export function saveDeckTitle(title) {
  // take in a single title argument and add it to the decks. 
  return getDecks().then((obj) => {
    obj[title] = {
      'title': title,
      'questions': []
    }
    return AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(obj));
  })
}

export function addCardToDeck(title, card) {
  // take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 
  const deck = this.getDeck(title)
  deck.questions.push(card)
  AsyncStorage.setItem(FLASHCARD_KEY, {title: deck})
}