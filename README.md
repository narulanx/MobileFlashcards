# MobileFlashcards
A React Native project to create/display mobile flashcards

This is a React Native project called MobileFlashCards. This is a mobile application (for both IOS and Android) that allow users tos study collection of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks. 

This project encompasses the fundamental aspects of building a native application including handling infinite lists, routing, and user input. By building this project, I gained an understanding of how to use React Native to build an iOS and Android application.

The project was created using create-react-native-app.

## Installation

- Download/Clone the repository from github
- Running the Application
  * Open a new terminal and navigate to the project folder
  * Install all the dependencies by running the command `yarn add` or `npm install`
  * Then start the server by running `yarn start`
  * The application will start with the QR code and some options to open the application, for example
    - a to open Android Device or emulator
    - i to open ios emulator
  * Alternatively, you can install 'Expo' app on mobile and scan the QR code to view the application

## Specifications

- Allows users to create a deck which can hold an unlimited number of cards.
- Allows users to add a card to a specific deck.
- The front of the card displays the question.
- The back of the card displays the answer.
- Users are able to quiz themselves on a specific deck and receive a score once they're done.
- Users receive a notification to remind themselves to study if they haven't already for that day.

## Views

### Deck List View (Default View)

- Displays the title of each Deck
- Displays the number of cards in each deck

### Individual Deck View

- Displays the title of the Deck
- Displays the number of cards in the deck
- Displays an option to start a quiz on this specific deck
- An option to add a new question to the deck

### Quiz View

- Displays a card question
- An option to view the answer
- A "Correct" button
- An "Incorrect" button
- The number of cards left in the quiz
- Displays the score once the quiz is complete

### New Deck View

- An option to enter in the title for the new deck
- An option to submit the new deck title

### New Question View

- An option to enter in the question
- An option to enter in the answer
- An option to submit the new question

## Other Important Features

- The project uses AsyncStorage to store decks and flashcards. Redux is NOT used in the project to maintain state.
- Pressing a deck will display the deck in an animation
- Logic for push notification has been implemented. Push notifications are generated every day at 8 PM if the user hasn't completed at least one quiz for that day.
- The app works correctly in both Android and iOS devices (or emulator).

Below are the dependencies used in the project -
- "expo": "^21.0.0",
- "react": "16.0.0-alpha.12",
- "react-native": "^0.48.4",
- "react-native-elements": "^0.17.0",
- "react-navigation": "^1.0.0-beta.15"

## References

Below are the references used in the project -
- https://facebook.github.io/react-native/
- https://medium.com/the-react-native-log/understanding-react-native-flexbox-layout-7a528200afd4
- https://reactnavigation.org/docs/navigators/
- https://docs.expo.io/versions/latest/sdk/location.html
- https://facebook.github.io/react-native/docs/animated.html
- https://expo.github.io/vector-icons/

## License

MIT License

Copyright (c) 2017 Nikhil Narula

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.