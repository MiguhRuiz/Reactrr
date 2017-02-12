import React, { Component, PropTypes } from 'react'
import uuid from 'uuid'

import MessagesList from '../MessagesList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

const propTypes = {
  user: PropTypes.object.isRequired
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: Object.assign({}, this.props.user, {
        retweets: [],
        favorites: []
      }),
      openText: false,
      userNameToReply: '',
      messages: [
        {
          id: uuid.v4(),
          text: 'Mensaje del tweet',
          picture: 'https://pbs.twimg.com/profile_images/825108498040156160/w148h2X_.jpg',
          displayName: 'Miguh Ruiz',
          username: 'MiguhRuiz',
          date: Date.now() - 180000,
          retweets: 0,
          favorites: 0
        },
        {
          id: uuid.v4(),
          text: 'Este es un nuevo mensaje',
          picture: 'https://pbs.twimg.com/profile_images/825108498040156160/w148h2X_.jpg',
          displayName: 'Miguh Ruiz',
          username: 'MiguhRuiz',
          date: Date.now() - 1800000,
          retweets: 0,
          favorites: 0
        }
      ]
    }
    this.handleSendText = this.handleSendText.bind(this)
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
    this.handleRetweet = this.handleRetweet.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
    this.handleReplyTweet = this.handleReplyTweet.bind(this)
  }

  handleSendText(ev) {
    ev.preventDefault()
    let newMessage = {
      id: uuid.v4(),
      username: this.props.user.email.split('@')[0],
      displayName: this.props.user.displayName,
      picture: this.props.user.photoURL,
      date: Date.now(),
      text: ev.target.text.value,
      retweets: 0,
      favorites: 0
    }
    this.setState({
      messages: this.state.messages.concat([newMessage]),
      openText: false
    })
  }

  handleCloseText(ev) {
    ev.preventDefault()
    this.setState({ openText: false })
  }

  handleOpenText(ev) {
    ev.preventDefault()
    this.setState({ openText: true })
  }

  handleRetweet(msgId) {
    let alreadyRetweeted = this.state.user.retweets.filter(rt => rt === msgId)
    if(alreadyRetweeted.length === 0) {
      let messages = this.state.messages.map(msg => {
        if(msg.id === msgId) {
          msg.retweets++
        }
        return msg
      })

      let user = Object.assign({}, this.state.user)
      user.retweets.push(msgId)

      this.setState({
        messages,
        user
      })
    }
  }

  handleFavorite(msgId) {
    let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)
    if(alreadyFavorited.length === 0) {
      let messages = this.state.messages.map(msg => {
        if(msg.id === msgId) {
          msg.favorites++
        }
        return msg
      })

      let user = Object.assign({}, this.state.user)
      user.favorites.push(msgId)

      this.setState({
        messages,
        user
      })
    }
  }

  handleReplyTweet(msgId, userNameToReply) {
    this.setState({
      openText: true,
      userNameToReply
    })
  }

  renderOpenText() {
    if(this.state.openText) {
      return (
        <InputText
          onSendText={this.handleSendText}
          onCloseText={this.handleCloseText}
          userNameToReply={this.state.userNameToReply}
        />
      )
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
        <MessagesList
          messages={this.state.messages}
          onRetweet={this.handleRetweet}
          onFavorite={this.handleFavorite}
          onReplyTweet={this.handleReplyTweet}
        />
      </div>
    )
  }
}

Main.propTypes = propTypes

export default Main
