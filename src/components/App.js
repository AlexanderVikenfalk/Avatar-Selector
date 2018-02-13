import React, { Component } from "react";

import ShowAvatar from "./ShowAvatar";
import SelectAvatar from "./SelectAvatar";
import { avatars } from "../assets/constants/avatars";

import "../styles/app.css";

class App extends Component {
  state = {
    currentAvatar: {
      src: "/images/avatar1.png",
      label: "Avatar 1",
      id: 1
    },
    showPopup: false
  };

  // Sets active avatar. Timeout functions are there for animation purposes.
  setAvatar = (avatar) => {
    setTimeout(() => {
      this.showPopup();
    }, 1000);
    setTimeout(() => {
      this.setState({ currentAvatar: avatar });
    }, 800);
  };

  // Toggle for showing popup window
  showPopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  render() {
    return (
      <div className="app ">
        <ShowAvatar
          currentAvatar={this.state.currentAvatar}
          showPopup={this.showPopup}
        />
        {this.state.showPopup && (
          <SelectAvatar
            setAvatar={this.setAvatar}
            avatars={avatars}
            showPopup={this.showPopup}
            currentAvatar={this.state.currentAvatar}
          />
        )}
      </div>
    );
  }
}

export default App;
