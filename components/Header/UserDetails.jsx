// UserDetails.js
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const UserDetails = () => {
  const userStyles = {
    container: "flex items-center gap-3 cursor-pointer",
    details: "flex flex-col items-start",
    name: "text-md text-[#f5f5f5] font-semibold",
    role: "text-xs text-[#ababab] font-medium",
  };

  return (
    <div className={userStyles.container}>
      <FaUserCircle className="text-[#f5f5f5] text-4xl" />
      <div className={userStyles.details}>
        <h1 className={userStyles.name}>Abdullah</h1>
        <p className={userStyles.role}>Admin</p>
      </div>
    </div>
  );
};

export default UserDetails;
