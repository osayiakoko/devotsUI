import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        
        <main>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
          </Switch>
        </main>

        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
