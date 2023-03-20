import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
          <Home />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
