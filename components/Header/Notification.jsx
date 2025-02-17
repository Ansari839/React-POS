// Notification.js
import React from "react";
import { FaBell } from "react-icons/fa";

const Notification = () => {
  const notificationStyles = {
    container: "bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer",
  };

  return (
    <div className={notificationStyles.container}>
      <FaBell className="text-[#f5f5f5] text-2xl" />
    </div>
  );
};

export default Notification;
