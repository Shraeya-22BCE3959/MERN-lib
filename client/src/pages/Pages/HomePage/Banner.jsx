import React from "react";

const Banner = ({ user }) => {
  return (
    <div className="home-banner">
      {user.userType == "user" ? (
        <>Available Books</>
      ) : (
        <>Active Members</>
      )}
    </div>
  );
};

export default Banner;
