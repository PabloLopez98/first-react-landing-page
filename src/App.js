import React from 'react';
import NavBar from './components/NavBar';
import NavBarMobile from './components/NavBarMobile';
import Content from './components/Content';
import Brands from './components/Brands';
import { useState } from 'react';

function App() {

  const [isMobile, setIsMobile] = useState(false);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 600) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  })

  if (!isMobile) {
    return (
      <div className="app-container">
        <header>
          <NavBar />
        </header>
        <section>
          <Content />
        </section>
        <footer>
          <Brands />
        </footer>
      </div>
    );
  } else {
    return (
      <div className="app-container">
        <header>
          <NavBarMobile />
        </header>
        <section>
          <Content />
        </section>
        <footer>
          <Brands />
        </footer>
      </div>
    );
  }
}

export default App;
