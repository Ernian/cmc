import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingPage from './components/pages/loadingPage/LoadingPage'
import MainPage from './components/pages/mainPage/MainPage'
import ElementPage from './components/pages/elementPage/ElementPage'
import { AnimatePresence } from 'framer-motion'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <BrowserRouter>
            <AnimatePresence>
                <Routes>
                    <Route path='/' element={isLoading ?
                        <LoadingPage setIsLoading={setIsLoading} />
                        : <MainPage />}
                    />
                    <Route path='/:element' element={<ElementPage />}
                    />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>

    );
}

export default App;

//<Route path="characters/:id" element={<SinglePage section="characters" />} />
//<Route path="*" element={<Page404 />} />