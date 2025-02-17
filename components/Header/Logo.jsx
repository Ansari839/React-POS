// Logo.js
import React from "react";

const Logo = () => {
  const logoStyles = {
    container: "flex items-center gap-2",
    text: "text-lg font-semibold text-[#f5f5f5]",
  };

  return (
    <div className={logoStyles.container}>
      <h1 className={logoStyles.text}>Logo</h1>
    </div>
  );
};

export default Logo;
