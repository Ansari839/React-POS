// Header.js
import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Notification from "./Notification";
import UserDetails from "./UserDetails";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* Logo */}
      <Logo />

      {/* Search */}
      <Search />

      {/* Notification and User Details */}
      <div className="flex items-center gap-4">
        <Notification />
        <UserDetails />
      </div>
    </div>
  );
};

export default Header;
