import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import {
    LoadingPage,
    MainPage,
    Page404,
} from './components/pages'
import Header from './components/header/Header'
import SectionMenuPage from './components/sectionMenuPage/SectionMenuPage'
import SectionElementPage from './components/sectionElementPage/SectionElementPage'
import ArticlePage from './components/articlePage/ArticlePage'
import ElementArticlePage from './components/elementArticlePage/ElementArticlePage'
import { productionPageData, heatPageData, waterPageData, windPageData, coldPageData } from './components/data'

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
                            <Route
                                path='/heat'
                                element={
                                    <SectionElementPage
                                        menuColors={{
                                            logoMenuClose: '#FFF',
                                            logoMenuOpen: '#FFF',
                                            menuColor: '#FFF',
                                        }}
                                        {...heatPageData}
                                    />}
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
                                element={
                                    <SectionElementPage
                                        menuColors={{
                                            logoMenuClose: '#FFF',
                                            logoMenuOpen: '#FFF',
                                            menuColor: '#FFF',
                                        }}
                                        {...waterPageData}
                                    />}
                            />

                            <Route
                                path='/wind'
                                element={
                                    <SectionElementPage
                                        menuColors={{
                                            logoMenuClose: '#FFF',
                                            logoMenuOpen: '#FFF',
                                            menuColor: '#FFF',
                                        }}
                                        {...windPageData}
                                    />}
                            />

                            <Route
                                path='/cold'
                                element={
                                    <SectionElementPage
                                        menuColors={{
                                            logoMenuClose: '#FFF',
                                            logoMenuOpen: '#FFF',
                                            menuColor: '#FFF',
                                        }}
                                        {...coldPageData}
                                    />}
                            />
                            <Route
                                path='/production'
                                element={<SectionMenuPage
                                    menuColors={{
                                        logoMenuClose: '#FFF',
                                        logoMenuOpen: '#FFF',
                                        menuColor: '#FFF',
                                    }}
                                    {...productionPageData}
                                />}
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