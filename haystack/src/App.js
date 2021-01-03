import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import SearchResults from './pages/SearchResults';
import Landing from './pages/Landing';
import SelectedProducts from './pages/SelectedProducts';
import Comparison from './pages/Comparison';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';
import MyProvider from '../src/utils/Context';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <MyProvider>
          <Route exact path="/Modal" component={Modal} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/SearchResults" component={SearchResults} />
          <Route exact path="/SelectedProducts" component={SelectedProducts} />
          <Route exact path="/Comparison" component={Comparison} />
          <Route exact path="/Contact" component={Contact} />
        </MyProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
