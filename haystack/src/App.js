import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import SearchResults from './pages/SearchResults';
import Landing from './pages/Landing';
import SelectedProducts from './pages/SelectedProducts';
import Comparison from './pages/Comparison';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/SearchResults" component={SearchResults} />
        <Route exact path="/SelectedProducts" component={SelectedProducts} />
        <Route exact path="/Comparison" component={Comparison} />
        <Route exact path="/Contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
