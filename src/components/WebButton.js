import React from "react";


function WebButton({ children, ...otherProps }) {
  return (
    <button {...otherProps}>
      {children}
    </button>
  );
}

export default WebButton;
