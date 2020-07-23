import React from 'react';
import './App.css';
import PageLayout from './components/PageLayout/pageLayout';
import Header from './components/Header/header';
import ProductContainer from './containers/ProductContainer/productContainer';
import FilterContainer from './containers/FilterContainer/filterContainer';
import { CheckoutContextProvider } from './context/checkoutContext';
import { Switch, Route } from 'react-router-dom';
import CheckoutContainer from './containers/CheckoutContainer/checkoutContainer';
import PriceContainer from './containers/PriceContainer/priceContainer';

const App = (props) => {
  return (
    <div className="App">
      <CheckoutContextProvider>
        <Switch>
          <PageLayout
            header={
              <Header />
            }
            left={
              <>
                <Route exact path="/" component={FilterContainer}></Route>
                <Route path="/checkout" component={PriceContainer}></Route>
              </>
            }
            main={
              <>
                <Route exact path="/" component={ProductContainer}></Route>
                <Route path="/checkout" component={CheckoutContainer}></Route>
              </>
            }
          />
        </Switch>
      </CheckoutContextProvider>
    </div>
  );
}

export default App;
