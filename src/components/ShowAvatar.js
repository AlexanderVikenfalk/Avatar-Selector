import React, { Component } from "react";

import "../styles/showAvatar.css";

export default class ShowAvatar extends Component {

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.props.showPopup();
    }
  }

  render() {
    const avatar = this.props.currentAvatar;  
    // Renders the selected avatar
    return (
      <img
        src={process.env.PUBLIC_URL + avatar.src}
        key={avatar.id}
        alt={avatar.label}
        className="avatar currentAvatar"
        onClick={() => this.props.showPopup()}
        onKeyPress={(event) => this.handleKeyPress(event)}
        tabIndex="0"
      />
    );
  }
}
