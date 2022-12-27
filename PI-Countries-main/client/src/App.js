import './App.css';
import  {Route} from "react-router-dom";
import Home from "./views/Home/Home"
import Form from './views/form/Form';
import LandingPage from './views/LadingPage/LadingPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>

      <Route exact path="/Home" component={Home}/>

      <Route exact path="/form" component={Form}/>
    </div>
  );
}

export default App;
