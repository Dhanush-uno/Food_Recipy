import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import LoginForm from "./components/Login"

import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import DetailedRecipePage from "./components/DetailedRecipePage";
import FavoritesPage from "./components/FavoritesPage";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <>
        <Navbar/>
        <div className="container main">
          <Switch>
            <Route exact path='/login' component={LoginForm}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/recipes/:title" component={DetailedRecipePage} />
            <Route exact path="/fav" component={FavoritesPage} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </div>
        <Footer />
      
    </>
  )
}

export default App;
