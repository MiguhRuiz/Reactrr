import React, { Component } from 'react'

import MessagesList from '../MessagesList'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          text: 'Mensaje del tweet',
          picture: 'https://pbs.twimg.com/profile_images/825108498040156160/w148h2X_.jpg',
          displayName: 'Miguh Ruiz',
          username: 'MiguhRuiz',
          date: Date.now() - 180000
        },
        {
          text: 'Este es un nuevo mensaje',
          picture: 'https://pbs.twimg.com/profile_images/825108498040156160/w148h2X_.jpg',
          displayName: 'Miguh Ruiz',
          username: 'MiguhRuiz',
          date: Date.now() - 1800000
        }
      ]
    }
  }

  render() {
    return(
      <MessagesList messages={this.state.messages} />
    )
  }
}

export default Main
