import ReactDOM from "react-dom/client";
import List from "./components/List";

function App() {
  return (
    <div>
      <h1>Ricky and Morty</h1>
      <List />
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
