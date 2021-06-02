import React, { FC } from 'react';
import './assets/reset.css';
import './assets/style.css';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import Router from '../src/Router';

const App: FC = () => {
  return (
    <>
      <Header />
      <main className="c-main bg-color">
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default App;
