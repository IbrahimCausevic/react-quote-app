import React, { useEffect, useState } from "react";
import "./AllQuotes.css";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import Navbar from "../../components/Navbar/Navbar";
// import AddQuote from "../../components/AddQuote/AddQuote";

function AllQuotes() {
  const [quotes, setQuotes] = useState([]);

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

  console.log(quotes);

  return (
    <div>
      <Navbar />
      <div className="all-quotes">
        <div className="wrapper">
          {quotes.map((quote, index) => {
            return <QuoteCard key={index} quote={quote} />;
          })}{" "}
        </div>
        {/* <AddQuote /> */}
      </div>
    </div>
  );
}

export default AllQuotes;
