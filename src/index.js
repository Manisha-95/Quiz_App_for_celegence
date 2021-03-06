import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import reducer from "./reducer";
import App from "./components/App";
//import Questions from "./components/Questions";
import Result from "./components/Result";
import Review from "./components/Review";
import Home from "./components/Home";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function RoutingComponent() {
  return (
    
     <div>
       <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/quiz" component={App} />
            <Route exact path ="/quiz/review" component={Review} />
            <Route exact path ="/quiz/result" component={Result} />
    </Switch>
    </div>
    
)
  }

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <RoutingComponent />
    </Router>
  </Provider>,
  document.getElementById("root")
);
