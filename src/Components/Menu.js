import React from "react";

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`menu full ${showMenu ? "show" : "hide"}`}>
      <div className="menuIcon close" onClick={() => setShowMenu(false)}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L21 21M21 1L1 21" stroke="white" />
        </svg>
      </div>
    </div>
  );
};

export default Menu;
