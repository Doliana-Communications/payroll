/** Dependencies */
import React from 'react';

/** Components */
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

/** Stylesheets */
import '../styles/main.scss';
import '../styles/Header.scss';
import '../styles/Nav.scss';
import '../styles/Footer.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
