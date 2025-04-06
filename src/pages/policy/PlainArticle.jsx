import React from "react";

const PlainArticle = ({ heading, text }) => {
  return (
    <article className="mt-6">
      <h2 className="font-bold text-2xl md:text-3xl">{heading} </h2>
      <p className="mt-4 text-xl lg:text-2xl leading-8">{text}</p>
    </article>
  );
};

export default PlainArticle;
