import React, { useState } from "react";
import { useEffect } from "react";
import "./quote.styles.css";

const QuoteBlock = () => {
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 1643 + 1);
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((str) => {
        setTitle(str[randomNumber].text);
        setAuthor(str[randomNumber].author);
      });
  }, []);

  if (!title.length) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <div className="quote-container">
          <div className="quote-title">{`"${title}"`}</div>
          <div className="quote-author">{`-${author}`}</div>
        </div>
      </div>
    );
  }
};

export default QuoteBlock;
