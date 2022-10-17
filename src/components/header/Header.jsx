import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/svg/logo.svg'
import icon_heat from '../../assets/svg/icon_heat.svg'
import icon_water from '../../assets/svg/icon_water.svg'
import icon_wind from '../../assets/svg/icon_wind.svg'
import icon_cold from '../../assets/svg/icon_cold.svg'
import { AnimatePresence, motion } from 'framer-motion'
import './header.css'

const Header = ({ icons }) => {
    const [isOpen, setIsOpen] = useState(false)

    const onHover = () => {
        setIsOpen(true)
    }

    const onMouseLeave = () => {
        setIsOpen(false)
    }

    const animation = {
        initial: {
            transform: 'scale(0)'
        },
        animate: {
            transform: 'scale(1)'
        },
        exit: {
            transform: 'scale(0)'
        },
        transition: {
            duration: 0.2
        }
    }

    return (
        <header
            onMouseEnter={onHover}
            onMouseLeave={onMouseLeave}
            style={{ zIndex: 10 }}
        >
            <div className={'header__left'}>

                <Link to='/'>
                    <img
                        className={'header__left__logo'}
                        src={logo} alt="logo"
                    />
                </Link>

                <AnimatePresence initial={false}>
                    {(icons && isOpen) && (
                        <>
                            <motion.div {...animation} transition={{ ...animation.transition, delay: 0 }} >
                                <Link to='/heat'><img className={'header__left__icon'} src={icon_heat} alt="heat" /></Link>
                            </motion.div>

                            <motion.a {...animation} transition={{ ...animation.transition, delay: .1 }} href="/b">
                                <img className={'header__left__icon'} src={icon_water} alt="water" />
                            </motion.a>

                            <motion.a {...animation} transition={{ ...animation.transition, delay: .2 }} href="/c">
                                <img className={'header__left__icon'} src={icon_wind} alt="wind" />
                            </motion.a>

                            <motion.a {...animation} transition={{ ...animation.transition, delay: .3 }} href="/d">
                                <img className={'header__left__icon'} src={icon_cold} alt="cold" />
                            </motion.a>
                        </>
                    )}
                </AnimatePresence>

            </div>

            <nav>
                <AnimatePresence initial={false}>
                    {(!icons || isOpen) && (
                        <>
                            <motion.a {...animation} transition={{ ...animation.transition, delay: .1 }} href="/a">О КОМПАНИИ</motion.a>
                            <motion.a {...animation} transition={{ ...animation.transition, delay: .1 }} href="/b">НАШИ УСЛУГИ</motion.a>
                            <motion.a {...animation} transition={{ ...animation.transition, delay: .1 }} href="/c">РЕФЕРЕНС</motion.a>
                            <motion.a {...animation} transition={{ ...animation.transition, delay: .1 }} href="/d">КОНТАКТЫ</motion.a>
                        </>
                    )}
                </AnimatePresence>
            </nav>

        </header>
    )
}

export default Header