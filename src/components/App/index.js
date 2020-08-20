import React from 'react';
import Header from '../Header';
import List from '../List';
import Footer from '../Footer';

import './styles.css';


import data from '../../data/currencies';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <List name={data} />
    <Footer />
  </div>
);

// == Export
export default App;
