
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicLayout from './Layouts/Public/PublicLayout';
import routes from "./Routes/routes";
import { NotFound } from "./Views/Public/404";

function App() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => (
      <Route exact path={prop.layout + prop.path} component={prop.component} key={key} />
    ));
  }
  return (
    <>
      <Router>
        <Switch>
          <Route path="/public" exact render={(props) => <PublicLayout {...props} />} />
          {
            getRoutes(routes)
          }
          {/* <Redirect from="/public" to="/" /> */}
          <Route path='*' exact component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
