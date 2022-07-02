import React from "react";


function WebButton({ children, ...otherProps }) {
  return (
    <button style={{ width: "8rem", height: "3rem" }} {...otherProps}>
      {children}
    </button>
  );
}

export default WebButton;
