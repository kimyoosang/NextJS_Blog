import React from 'react';
import Navbar from '../components/Navbar';

function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
