import "./App.scss";
import { Cart, Store } from "./pages";

import { Provider } from "react-redux";
import { createStore } from "redux";
import cartReducer from "./core/reducers/cartReducer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const state = createStore(cartReducer);

const App = () => 
    <Provider store={state}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Store} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </Provider>
  
export default App;
