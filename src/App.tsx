import React, { FC } from 'react';
import './assets/reset.css';
import './assets/style.css';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <main className="c-main bg-color">
        <h1 className="u-text__headline u-text-center">hello</h1>
      </main>
      <Footer />
    </>
  );
};

export default App;
