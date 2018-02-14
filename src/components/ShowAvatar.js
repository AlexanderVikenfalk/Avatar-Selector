import React from "react";

import "../styles/showAvatar.css";

// export default class ShowAvatar extends Component {
  const handleKeyPress = (event,props) => {
    if (event.key === "Enter") {
      props.showPopup();
    }
  };

// Renders the selected avatar
const showAvatar = props => {
  const avatar = props.currentAvatar;
  return (
    <img
      src={process.env.PUBLIC_URL + avatar.src}
      key={avatar.id}
      alt={avatar.label}
      className="avatar currentAvatar"
      onClick={() => props.showPopup()}
      onKeyPress={event => handleKeyPress(event,props)}
      tabIndex="0"
    />
  );
};

export default showAvatar;
