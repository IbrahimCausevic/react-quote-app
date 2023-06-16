import React, { useEffect, useState } from "react";
import "./QuoteDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import DetailsNavbar from "../../components/Navbar/DetailsNavbar";
import EditNavbar from "../../components/Navbar/EditNavbar";

function QuoteDetails() {
  const params = useParams();
  const [quote, setQuote] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-quote/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  const likeHandler = () => {
    fetch("https://js-course-server.onrender.com/quotes/like/" + params.id, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <DetailsNavbar />
      <div className="quote-details">
        <div className="quote-details-card">
          <h3>
            <i>{quote.quoteText}</i>
          </h3>
          <p>
            <b>
              <i>{quote.quoteAuthor}</i>
            </b>
          </p>
          <p>{quote.quoteSource}</p>
          <p className="likes">Likes: {quote.likes}</p>
          <div className="buttons">
            <button onClick={likeHandler}>Like</button>
            <button onClick={() => navigate(`/quote/${params.id}/edit`)}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteDetails;
