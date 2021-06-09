import React from "react";

const MainScreen = ({ setShowMenu }) => {
  return (
    <div className="mainScreen full">
      <div className="menuIcon open" onClick={() => setShowMenu(true)}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 21H22M0 1H22M0 11H22" stroke="black" />
        </svg>
      </div>
    </div>
  );
};

export default MainScreen;
