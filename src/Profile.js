import React from "react";

const profileData = {
  velopert: {
    name: "kim min joon",
    description: "Frontend Engineer & Laftel Inc.",
  },
  gildong: {
    name: "hong gil dong",
    description: "good guy",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>the username doesn't exist</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
