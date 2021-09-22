import styled from 'styled-components';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import HomePage from "../../pages/HomePage"
import ProductsPage from "../../pages/ProductsPage"

const Root = styled.div`

`

function App() {
  return (
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </Root>
  );
}

export default App;