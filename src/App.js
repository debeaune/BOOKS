import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AddBooks from './containers/AddBooks'
import SearchBooks from './containers/SearchBooks'

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
        <Switch>
          <Route exact path="/" component={ AddBooks } />
          <Route path="/search" component={ SearchBooks } />
        </Switch>
      <Footer />  
    </Router>
    
        
    </div>
  );
}

export default App;
