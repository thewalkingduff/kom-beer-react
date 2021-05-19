import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products'
import { productData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Home from './components/Home';
import What from './components/What';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/what" component={What} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Feature />
        <Footer />
      </Switch>

    </main>
  );
}



export default App;
