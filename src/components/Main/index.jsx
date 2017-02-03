import React, { Component } from 'react'
import uuid from 'uuid'

import MessagesList from '../MessagesList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openText: false,
      messages: [
        {
          id: uuid.v4(),
          text: 'Mensaje del tweet',
          picture: 'https://pbs.twimg.com/profile_images/825108498040156160/w148h2X_.jpg',
          displayName: 'Miguh Ruiz',
          username: 'MiguhRuiz',
          date: Date.now() - 180000
        },
        {
          id: uuid.v4(),
          text: 'Este es un nuevo mensaje',
          picture: 'https://pbs.twimg.com/profile_images/825108498040156160/w148h2X_.jpg',
          displayName: 'Miguh Ruiz',
          username: 'MiguhRuiz',
          date: Date.now() - 1800000
        }
      ]
    }
  }

  handleOpenText(ev) {
    ev.preventDefault()
    this.setState({ openText: true })
  }

  renderOpenText() {
    if(this.state.openText) {
      return <InputText />
    }
  }

  render() {
    return(
      <div>
        <ProfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessagesList messages={this.state.messages} />
      </div>
    )
  }
}

export default Main
