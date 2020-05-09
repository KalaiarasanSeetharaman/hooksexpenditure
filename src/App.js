import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseContainer from './Container/ExpenseContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = React.memo(()=>{
    return(
        <Router>
          <Switch>
            <Route path="/" component={ExpenseContainer} />
          </Switch>
        </Router>
    )
})
export default App; 