import React from "react";
import "./Profiles.scss";

import ProfileCard from "../ProfileCard/ProfileCard";

const Profiles = (props) => {
  const { users } = props;

  const ProfilesJSX = users.map((user, index) => {
    return (
      <>
        <ProfileCard
          key={index + 1}
          name={`${user.name.first} ${user.name.last}`}
          image={user.picture.thumbnail}
          email={user.email}
          phoneNumber={user.cell}
        />
      </>
    );
  });

  return <div className="profiles"> {ProfilesJSX} </div>;
};

export default Profiles;
