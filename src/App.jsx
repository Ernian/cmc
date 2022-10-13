import { useState } from 'react'
import LoadingPage from './components/pages/loadingPage/LoadingPage'
import MainPage from './components/pages/mainPage/MainPage'
import { AnimatePresence } from "framer-motion"

function App() {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <AnimatePresence>
            {isLoading ? (<LoadingPage setIsLoading={setIsLoading} />) : <MainPage />}
        </AnimatePresence>
    );
}

export default App;
