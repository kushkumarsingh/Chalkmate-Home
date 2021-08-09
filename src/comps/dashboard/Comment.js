import React, { Component } from 'react'
import RedLike from './images/Chalkmate_red_like.svg';
import styles from './comment.module.css'

export default class Comment extends Component {
  state={
    likes:5,
  }
  liker = () =>{
    if(this.state.likes==5) this.setState({likes:6})
    else this.setState({likes:5})
  }
  render() {
    return (
      <div className={styles.outerContainer}>
        <img src={this.props.photo} height="50px" width="50px"/>
        <div className={styles.commentContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.titleDiv}>
              <span className={styles.name}>
                {this.props.name}
              </span>
              <span className={styles.second}>
                2nd
              </span>
              <span className={styles.timestamp}>
                {this.props.timestamp}
              </span>
            </div>
            <p className={styles.message}>
              {this.props.commentdata}
            </p>
          </div>  
          <div className={styles.likeDiv}>
            <span><span onClick={this.liker} style={{cursor:"pointer"}}>Like </span><img src={RedLike} height="12px"/> {this.state.likes} </span><div className={styles.bar} />  <span>Reply</span>
          </div>
        </div>
      </div>
    )
  }
}

// photo,name,timestamp,commentdata