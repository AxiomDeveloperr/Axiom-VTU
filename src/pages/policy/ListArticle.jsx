import React from "react";

const ListArticle = ({ heading, text, listItems }) => {
  return (
    <article className="mt-6">
      <h2 className="font-bold text-2xl md:text-3xl">{heading}</h2>
      <p className="mt-4 text-xl lg:text-2xl leading-8">
        {text}
        {listItems && listItems.length > 0 && (
          <ul className="list-disc pl-6">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </p>
    </article>
  );
};

export default ListArticle;
