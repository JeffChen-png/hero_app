import React from 'react';
// import { Counter } from './features/counter/Counter';
import Header from "./Components/Header"
import Footer from './Components/Footer';

import styles from "./styles/app.module.sass"
import "./index.css"

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
