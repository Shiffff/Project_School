import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="userCardContainer">
      <ul>
        <li>{user.userName}</li>
        <li>{user.name}</li>
        <li>{user.firstName}</li>
        <li>{user.classe}</li>
        <li>Modif</li>
        <li>Supr</li>
      </ul>
    </div>
  );
};

export default UserCard;
