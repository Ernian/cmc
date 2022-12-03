import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import {
    LoadingPage,
    MainPage,
    HeatePage,
    WaterPage,
    WindPage,
    ColdPage,
    Page404,
    ProductionPage,
} from './components/pages'
import Header from './components/header/Header'
import ArticlePage from './components/articlePage/ArticlePage'
import ElementArticlePage from './components/elementArticlePage/ElementArticlePage'
import AboutCompany from './components/pages/aboutCompany/AboutCompany'
import { productionPageData, heatPageData, waterPageData, windPageData, coldPageData } from './components/data'

export const AppContext = createContext()

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [globalMenuColors, setMenuColors] = useState({
        logoMenuClose: '#FBA91B',
        logoMenuOpen: '#FFF',
        menuColor: '#FBA91B',
    })
    const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth)

    function debounce(callback, delay) {
        let timer
        return function (...args) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback.apply(this, args)
            }, delay)
        }
    }

    const watchWidth = debounce(() => setScreenWidth(document.documentElement.clientWidth), 300)

    window.addEventListener('resize', watchWidth)

    const context = { globalMenuColors, setMenuColors, screenWidth, setScreenWidth }

    return (
        <AppContext.Provider value={context}>
            <BrowserRouter>
                <AnimatePresence>
                    <Routes>
                        <Route
                            path='/'
                            element={<Header
                                {...globalMenuColors}
                                isLoading={isLoading}
                            />}>
                            <Route index element={
                                isLoading ?
                                    <LoadingPage setIsLoading={setIsLoading} />
                                    : <MainPage setMenuColors={setMenuColors} />
                            } />
                            <Route
                                path='/heat'
                                element={<HeatePage />}
                            />

                            {/* <Route
                                path='/heat/:id'
                                element={<ElementArticlePage
                                    menuColors={{
                                        logoMenuClose: '#FFF',
                                        logoMenuOpen: '#FFF',
                                        menuColor: '#FFF',
                                    }}
                                    {...heatPageData}
                                />}
                            /> */}

                            <Route
                                path='/water'
                                element={<WaterPage />}
                            />

                            <Route
                                path='/wind'
                                element={<WindPage />}
                            />

                            <Route
                                path='/cold'
                                element={<ColdPage />}
                            />
                            <Route
                                path='/company'
                                element={<AboutCompany
                                    menuColors={{
                                        logoMenuClose: '#FFF',
                                        logoMenuOpen: '#FFF',
                                        menuColor: '#FFF',
                                    }}
                                />}
                            />
                            <Route
                                path='/production'
                                element={<ProductionPage />}
                            />
                            <Route
                                path='/production/:id'
                                element={<ArticlePage
                                    menuColors={{
                                        logoMenuClose: '#FFF',
                                        logoMenuOpen: '#FFF',
                                        menuColor: '#FFF',
                                    }}
                                    {...productionPageData}
                                />}
                            />
                            <Route path='*' element={<Page404 />} />
                        </Route>
                    </Routes>
                </AnimatePresence>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App