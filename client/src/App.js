import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
          <div>
            <Navbar />
            <Wrapper>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
            </Wrapper>
          </div>

    </Router>
  );
}

export default App;
