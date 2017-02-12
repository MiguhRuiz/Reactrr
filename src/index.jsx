import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyBl_vlOvhfN4xl9pHq3tNxiCDlww988NCo',
  authDomain: 'reactrr-30f3e.firebaseapp.com',
  databaseURL: 'https://reactrr-30f3e.firebaseio.com',
  storageBucket: 'reactrr-30f3e.appspot.com',
  messagingSenderId: '729333602355'
})

import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))

export default App
