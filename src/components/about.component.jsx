import React from "react";

const About = ({heading, content}) => {
  return (
    <div className="my-6 text-left">
      <h2 className="text-2xl text-secondary-dark font-bold">{heading}</h2>
      <p className="text-base">{content}</p>
    </div>
  );
};

export default About;
