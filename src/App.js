import { useState, useEffect } from "react";
import "./App.css";
import QuoteMachine from "./components/QuoteMachine";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BreakPlanner from "./components/BreakPlanner";
import More from "./components/More";

function App() {
  const [styles, setStyles] = useState({
    backgroundColor: "#333",
    color: "#fff",
  });
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes))
      .catch((error) => console.log(`Some error occured: ${error}`));
  }, []);

  const projects = [
    { id: 1, name: "Quote Machine", link: "/" },
    { id: 2, name: "Break Planner", link: "/break-planner" },
    { id: 3, name: "More Coming..", link: "/coming" },
  ];

  const newStyle = (style) => {
    setStyles(style);
  };

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
              element={<QuoteMachine updateStyle={newStyle} quotes={quotes}/>}
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
