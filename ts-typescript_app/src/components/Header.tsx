import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">DevZen</div>
      <nav className="nav">
        <a href="#overview">Overview</a>
        <a href="#activity">Activity</a>
        <a href="#settings">Settings</a>
      </nav>
    </header>
  );
};

export default Header;
