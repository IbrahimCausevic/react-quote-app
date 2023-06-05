import React, { useEffect, useState } from "react";
import "./AllQuotes.css";
import { useNavigate } from "react-router-dom";

function AllQuotes() {
  const [quotes, setQuotes] = useState([]);
  const firstQuoteId = "63dd1748a045500035752dc4";
  const secondQuoteId = "63d1846cf353e20036f8b3e5";

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const firstSelectedQuote = quotes.find((quote) => quote._id === firstQuoteId);
  const secondSelectedQuote = quotes.find(
    (quote) => quote._id === secondQuoteId
  );

  const navigate = useNavigate();

  const showDetails = () => {
    navigate("/quote/:id");
  };

  return (
    <div className="all-quotes">
      <div className="section">
        <h1>All Quotes</h1>

        {firstSelectedQuote && (
          <div className="quote-card" onClick={showDetails}>
            <div className="quote-author">{firstSelectedQuote.quoteAuthor}</div>
            <div className="quote-text">{firstSelectedQuote.quoteText}</div>
            <div className="quote-likes">{firstSelectedQuote.likes} Likes</div>
          </div>
        )}

        {secondSelectedQuote && (
          <div className="quote-card">
            <div className="quote-author">
              {secondSelectedQuote.quoteAuthor}
            </div>
            <div className="quote-text">{secondSelectedQuote.quoteText}</div>
            <div className="quote-likes">{secondSelectedQuote.likes} Likes</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllQuotes;
