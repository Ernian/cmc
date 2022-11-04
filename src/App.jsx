import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import {
    LoadingPage,
    MainPage,
    ProductionPage,
    CompressorPage,
    Page404,
} from './components/pages'
import Header from './components/header/Header'

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [menuColors, setMenuColors] = useState({
        logoMenuClose: '#FBA91B',
        logoMenuOpen: '#FFF',
        menuColor: '#FBA91B',
    })

    return (
        <BrowserRouter>
            <AnimatePresence>
                <Routes>
                    <Route
                        path='/'
                        element={<Header
                            logoColors={{
                                menuClose: '#FBA91B',
                                menuOpen: '#FFF'
                            }}
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
                        <Route path='*' element={<Page404 />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
}

export default App;