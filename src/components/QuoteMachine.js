import { FaTwitterSquare } from "react-icons/fa";
function QuoteMachine({ getNewQuote, quote, author }) {

  return (
    <div id="quote-box">
      <div className="quote-text">
        <i className="fa fa-quote-left"></i>
        <span id="text">{quote}</span>
      </div>
      <div className="quote-author">
        - <span id="author">{author}</span>
      </div>
      <button id="new-quote" onClick={getNewQuote}>
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
        <FaTwitterSquare />
      </a>
    </div>
  );
}

export default QuoteMachine;
