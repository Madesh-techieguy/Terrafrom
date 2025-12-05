import React from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="app-root">
      <div className="gradient-bg" />
      <Header />
      <main className="main">{children}</main>
      <footer className="footer">
        DevZen Dashboard • Powered by Django + React + TypeScript
      </footer>
    </div>
  );
};

export default Layout;
