import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails/QuoteDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AddQuote from "./components/AddQuote/AddQuote";
import AddNewQuote from "./pages/AddNewQuote/AddNewQuote";
import EditQuote from "./pages/EditQuote/EditQuote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllQuotes />} />
        <Route path="/quote/:id" element={<QuoteDetails />} />
        <Route path="/quote/:id/edit" element={<EditQuote />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit" element={<AddQuote />} />
        <Route path="/addquote" element={<AddNewQuote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
