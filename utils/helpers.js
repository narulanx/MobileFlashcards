import React from 'react'
import { AsyncStorage } from 'react-native' 
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'MobileFlashcards:notifications'
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
    if (obj) {
      obj[title] = {
        'title': title,
        'questions': []
      }
    } else {
      obj = {title: {
        'title': title,
        'questions': []
      }}
    }
    return AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(obj));
  })
}

export function addCardToDeck(title, card) {
  // take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 
  return getDecks().then((obj) => {
    obj[title].questions.push(card)
    return AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(obj));
  })
}

export function clearLocalNotification() {
  // Clears the local notification
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  // Create the object for notification
  return {
    title: 'Create your deck and add cards for quiz!',
    body: "👋 Don't forget to create deck/card today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  // Sets the local notification for every day at 8 pm
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}