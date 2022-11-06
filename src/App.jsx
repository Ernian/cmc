import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import {
    LoadingPage,
    MainPage,
    ProductionPage,
    CompressorPage,
    ReceiverPage,
    PumpPage,
    RecoveryPage,
    Page404,
} from './components/pages'
import Header from './components/header/Header'


export const AppContext = createContext(null)

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [menuColors, setMenuColors] = useState({
        logoMenuClose: '#FBA91B',
        logoMenuOpen: '#FFF',
        menuColor: '#FBA91B',
    })
    const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth)

    window.addEventListener('resize', () => {
        setScreenWidth(document.documentElement.clientWidth)
    })

    const context = { setMenuColors, screenWidth, setScreenWidth }

    return (
        <AppContext.Provider value={context}>
            <BrowserRouter>
                <AnimatePresence>
                    <Routes>
                        <Route
                            path='/'
                            element={<Header
                                {...menuColors}
                                isLoading={isLoading}
                            />}>
                            <Route index element={
                                isLoading ?
                                    <LoadingPage setIsLoading={setIsLoading} />
                                    : <MainPage setMenuColors={setMenuColors} />
                            } />
                            {/* <Route path='/heat' element={<HeatPage />} /> */}
                            {/* <Route path='/water' element={<WaterPage />} /> */}
                            {/* <Route path='/wind' element={<WindPage />} /> */}
                            {/* <Route path='/cold' element={<ColdPage />} /> */}

                            {/* <Route path='/company' element={<CompanyPage />} /> */}
                            {/* <Route path='/objects' element={<CompanyPage />} /> */}
                            {/* <Route path='/realization' element={<CompanyPage />} /> */}
                            {/* <Route path='/engineering' element={<CompanyPage />} /> */}
                            <Route
                                path='/production'
                                element={<ProductionPage setMenuColors={setMenuColors} />}
                            />
                            <Route path='/production/compressor' element={<CompressorPage />} />
                            <Route path='/production/receiver' element={<ReceiverPage />} />
                            <Route path='/production/pump' element={<PumpPage />} />
                            <Route path='/production/recovery' element={<RecoveryPage />} />
                            <Route path='*' element={<Page404 />} />
                        </Route>
                    </Routes>
                </AnimatePresence>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App