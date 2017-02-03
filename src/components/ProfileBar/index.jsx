import React, { Component } from 'react'
import styles from './profilebar.css'

class ProfileBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={styles.root}>
        <figure>
          <img className={styles.avatar} src={this.props.picture} />
        </figure>
        <span className={styles.username}>Hola @{this.props.username}!</span>
        <button onClick={this.props.openText} className={styles.button}>
          <span className="fa fa-lg fa-edit"></span> Tweet!
        </button>
      </div>
    )
  }
}

export default ProfileBar
