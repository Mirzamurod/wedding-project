import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';

function App() {

  const routes = [
    {
      path: "/",
      component: MainPage
    }
  ]

  return (
    <BrowserRouter >
      <Switch>
        {
          routes.map(route => <Route key={route.path} path={route.path} component={route.component} exact />)
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
