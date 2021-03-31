import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";
  return (
    <div>
      <h1>About</h1>
      <p>This is React router practice!</p>
      {detail && <p>Additional information ....</p>}
    </div>
  );
};

export default About;
