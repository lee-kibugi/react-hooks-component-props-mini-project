import React from 'react';

function About  ({ image, about }) {
  // Use a default image if no prop is passed
  const defaultImage = "https://via.placeholder.com/215";
  
  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;
