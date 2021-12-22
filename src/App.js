import { useState, useEffect } from "react";
import "./App.css";
import QuoteMachine from "./components/QuoteMachine";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BreakPlanner from "./components/BreakPlanner";
import More from "./components/More";

function App() {
  const [styles, setStyles] = useState({
    backgroundColor: "#333",
    color: "#333",
  });
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const projects = [
    { id: 1, name: "Quote Machine", link: "/" },
    { id: 2, name: "Break Planner", link: "/break-planner" },
    { id: 3, name: "More Coming..", link: "/coming" },
  ];

  const colors = [
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

  const getRandomQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]?.quote);
    setAuthor(quotes[Math.floor(Math.random() * quotes.length)]?.author);

    let index = Math.floor(Math.random() * colors.length);
    setStyles({
      backgroundColor: colors[index],
      color: colors[index],
    });
  };

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        let quotes = data.quotes;
        setQuotes(quotes)
        setQuote(quotes[Math.floor(Math.random() * quotes.length)].quote)
        setAuthor(quotes[Math.floor(Math.random() * quotes.length)].author)
      })
      .catch((error) => console.log(`Some error occured: ${error}`));
  },[]);

  return (
    <div className="App">
      <Router>
        <div
          className="panel"
          style={{ backgroundColor: styles.backgroundColor }}
        >
          <div>
            <h3 className="item">Projects</h3>
          </div>
          <div className="project-items">
            {projects.map((project) => (
              <Link to={project.link} key={project.id}>
                <h3 className="item project">{project.name}</h3>
              </Link>
            ))}
          </div>
        </div>
        <div className="app-section" style={styles}>
          <Routes>
            <Route
              path="/"
              exact
              element={<QuoteMachine getNewQuote={getRandomQuote} quote={quote} author={author}/>}
            />
            <Route path="/break-planner" element={<BreakPlanner />} />
            <Route path="/coming" element={<More />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
