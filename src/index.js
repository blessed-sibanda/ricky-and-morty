import ReactDOM from "react-dom/client";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-dark">
        <div className="container justify-content-center justify-content-sm-start">
          <h1 className="navbar-brand text-light">Ricky and Morty</h1>
        </div>
      </nav>
      <div className="container pt-3">
        <List />
      </div>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
