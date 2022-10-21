import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import logo from '../../assets/svg/logo.svg'
import './header.css'

const Header = () => {
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
    const [menu_class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        }
        else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const menuVariantsIn = {
        initial: {
            x: '100vw',
            display: 'none',
        },
        animate: {
            x: 0,
            display: 'flex',
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    }
    const menuVariantsOut = {
        initial: {
            x: 0,
        },
        animate: {
            x: '100vw',
            transition: {
                duration: .3,
                ease: 'easeInOut'
            }
        }
    }

    const pVariantsIn = {
        initial: {
            opacity: 0,
            y: 150,
        },
        animate: i => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: .2,
                delay: (i + 1) / 8,
            }
        })
    }

    const pVariantsOut = {
        initial: {
            opacity: 1,
            y: 0,
        },
        animate: {
            opacity: 0,
            y: 150,
            transition: {
                duration: 0.1,
            }
        },
    }

    const fadeIn = {
        initial: {
            opacity: 0,
        },
        animate: delay => ({
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: delay
            }
        }),
    }
    const fadeOut = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 0,
            transition: {
                duration: 0.1,
            }
        },
    }

    const menuLinks = [
        { title: 'О КОМПАНИИ', url: '/company' },
        { title: 'РЕАЛИЗОВАННЫЕ ОБЪЕКТЫ', url: '/objects' },
        { title: 'КОМПЛЕКСНАЯ РЕАЛИЗАЦИЯ', url: '/realization' },
        { title: 'ПРОЕКТИРОВАНИЕ ОБЪЕКТОВ', url: '/engineering' },
        { title: 'ПРОИЗВОДСТВО ОБОРУДОВАНИЯ', url: '/production' },
    ]

    return (
        <header>
            <div className='header__left'>
                <Link to='/'>
                    <img
                        className={'header__left__logo'}
                        src={logo} alt="logo"
                    />
                </Link>
            </div>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
            <motion.div
                className={menu_class}
                initial="initial"
                animate="animate"
                variants={isMenuClicked ? menuVariantsIn : menuVariantsOut}
            >
                {
                    menuLinks.map(({ title, url }, i) => (
                        <motion.p
                            key={url}
                            className='menu-link'
                            initial='initial'
                            animate='animate'
                            variants={isMenuClicked ? pVariantsIn : pVariantsOut}
                            custom={i}
                            whileHover={{
                                scale: 1.02,
                                transition: {
                                    duration: 0.2
                                }
                            }}
                        >
                            <Link to={url} className='menu-link-text'>{title}</Link>
                        </motion.p>
                    ))
                }

                <motion.p
                    className='menu-address'
                    variants={isMenuClicked ? fadeIn : fadeOut}
                    custom={0.9}
                >
                    123112, ГОРОД МОСКВА,<br />
                    НАБЕРЕЖНАЯ ПРЕСНЕНСКАЯ,<br />
                    ДОМ 10, ЭТАЖ 43 ПОМ I КОМ 1-8
                </motion.p>
                <motion.p
                    className='menu-phone'
                    variants={isMenuClicked ? fadeIn : fadeOut}
                    custom={1.1}
                >+7 (499) 426-04-23</motion.p>
                <motion.p
                    className='menu-mail'
                    variants={isMenuClicked ? fadeIn : fadeOut}
                    custom={1.3}
                >info@smseng.ru</motion.p>
            </motion.div>
        </header>
    )
}

export default Header