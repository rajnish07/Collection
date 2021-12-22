import { useEffect, useState } from "react";

function QuoteMachine({ updateStyle, quotes }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  let colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  useEffect(() => {
     getRandomQuote()
  }, [quotes]);

  const getRandomQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]?.quote);
    setAuthor(quotes[Math.floor(Math.random() * quotes.length)]?.author);

    let index = Math.floor(Math.random() * colors.length);
    updateStyle({
      backgroundColor: colors[index],
      color: colors[index],
    });
  };

  return (
    <div id="quote-box">
      <div className="quote-text">
        <i className="fa fa-quote-left"></i>
        <span id="text">{quote}</span>
      </div>
      <div className="quote-author">
        - <span id="author">{author}</span>
      </div>
      <button id="new-quote" onClick={getRandomQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        className="button"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
          '"' + quote + '" ' + author
        )}`}
        target="_top"
        title="tweet this quote"
      >
        <i className="fa fa-twitter-square"></i>
      </a>
    </div>
  );
}

export default QuoteMachine;
