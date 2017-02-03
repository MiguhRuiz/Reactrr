import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'

import Header from '../Header'
import Main from '../Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        photoURL: 'https://pbs.twimg.com/profile_images/825108498040156160/w148h2X_.jpg',
        email: 'cazaustre@gmail.com',
        onOpenText: false
      }
    }
  }
  
  render() {
    return(
      <div>
        <Header />
        <Main
          user={this.state.user}
        />
      </div>
    )
  }
}

export default App
