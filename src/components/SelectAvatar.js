import React, { Component } from "react";

import "../styles/selectAvatar.css";

export default class SelectAvatar extends Component {
  state = {
    activeAvatarID: null,
    animateLeaving: false
  };

  componentDidMount() {

    // Register an eventlistener for closing the element when clicking outside of it
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    // Unregister an eventlistener for closing the element when clicking outside of it
    document.removeEventListener("click", this.handleClickOutside);
  }

  //Toggle for exit animation
  animateUnmount = () => {
    this.setState({ animateLeaving: !this.state.animateLeaving });
  };

  // Saves the ID of clicked Avatar in state
  makeActive = avatarID => {
    this.setState({
      activeAvatarID: avatarID
    });
  };

  // Checks if user clicked outside of element and ads the exit-animation if needed
  handleClickOutside = e => {
    if (!this.node.contains(e.target)) {
      this.animateUnmount();
      setTimeout(() => {
        this.props.showPopup();
      }, 100);
    }
  };

  // Checks for keypress
  handleKeyPress = (event, avatar) => {
    if (event.key === "Enter") {
      this.makeActive(avatar.id);
      this.props.setAvatar(avatar);
      setTimeout(() => {
        this.animateUnmount();
      }, 800);
    }
  };

  render() {
    const { avatars } = this.props;
    // Array with classes applied to the Popover.
    let popoverClasses = ["popover", "bounceIn"];
    // Animation-class is pushed to array when element is leaving.
    if (this.state.animateLeaving) {
      popoverClasses.push("scaleOut");
    }
    // Checks if there are avatars to render
    const avatarList = !avatars
      ? null
      : avatars.map(avatar => (
          <li key={avatar.id}>
            <div className="wrapper">
              <img
                src={process.env.PUBLIC_URL + avatar.src}
                alt={avatar.label}
                className="avatar avatarListed"
              />
              <div
                tabIndex="0"
                className="overlay"
                onClick={() => {
                  this.makeActive(avatar.id);
                  this.props.setAvatar(avatar);
                }}
                onKeyPress={event => this.handleKeyPress(event, avatar)}
              />
              {this.state.activeAvatarID === avatar.id && (
                <div className="loader" />
              )}

              {this.props.currentAvatar.id === avatar.id && (
                <div className="clickedAvatar" />
              )}
            </div>
          </li>
        ));

    return (
      <div
        id="popover"
        className={popoverClasses.join(" ")}
        // className="popover bounceIn"
        ref={node => (this.node = node)}
      >
        <div className="triangle-top " />
        <div className="titleWrapper">Choose your avatar</div>
        <ul> {avatarList}</ul>
      </div>
    );
  }
}
