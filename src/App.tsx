import React from 'react'
// import { Counter } from './features/counter/Counter';
import Header from './Components/Header'
import RandomCharacter from './Components/RandomCharacter'
import Footer from './Components/Footer'

import styles from './styles/app.module.sass'

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />
            <RandomCharacter />
            <Footer />
        </div>
    )
}

export default App
