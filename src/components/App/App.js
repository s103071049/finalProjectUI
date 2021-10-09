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
import AboutPage from '../../pages/AboutPage'
import FaqPage from '../../pages/FaqPage';
import UserPage from '../../pages/UserPage';
import SearchPage from '../../pages/SearchPage';
import OrderPage from '../../pages/Admin/OrderPage';

const Root = styled.div`
`

function App() {
  return (
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/product">
            {/* <ProductPage /> */}
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/faq">
            <FaqPage />
          </Route>
          <Route path="/user">
            <UserPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/admin/orders">
            <OrderPage />
          </Route>
        </Switch>
        <Footer />
      </Router >
    </Root >
  );
}

export default App;
