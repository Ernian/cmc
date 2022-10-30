import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'
import './header.css'

const Header = ({ logoMenuOpen, logoMenuClose, menuColor, isLoading }) => {
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
    const [menu_class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const currentUrl = window.location.pathname

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

    const closeMenu = () => {
        setIsMenuClicked(false)
        setBurgerClass('burger-bar unclicked')
        setMenuClass('menu hidden')
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

    const toWhiteColor = {
        color: '#fff',
        transition: {
            duration: .2
        }
    }

    const menuLinks = [
        { title: 'О КОМПАНИИ', url: '/company' },
        { title: 'РЕАЛИЗОВАННЫЕ ОБЪЕКТЫ', url: '/objects' },
        { title: 'КОМПЛЕКСНАЯ РЕАЛИЗАЦИЯ', url: '/realization' },
        { title: 'ПРОЕКТИРОВАНИЕ ОБЪЕКТОВ', url: '/engineering' },
        { title: 'ПРОИЗВОДСТВО ОБОРУДОВАНИЯ', url: '/production' },
    ]

    return (
        <>
            <header
                style={{ display: isLoading ? 'none' : 'flex' }}
            >
                <div className='header__left'>
                    <Link to='/' onClick={closeMenu}>
                        <Logo
                            stroke={isMenuClicked ? logoMenuOpen : logoMenuClose}
                            cssClass='header__left__logo'
                        />
                    </Link>
                </div>
                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div
                            className={burger_class}
                            style={{
                                backgroundColor: isMenuClicked ? '#D60000' : `${menuColor}`
                            }}
                        />
                        <div
                            className={burger_class}
                            style={{
                                backgroundColor: isMenuClicked ? '#D60000' : `${menuColor}`
                            }}
                        />
                        <div
                            className={burger_class}
                            style={{
                                backgroundColor: isMenuClicked ? '#D60000' : `${menuColor}`
                            }}
                        />
                    </div>
                </nav>
                <motion.div
                    className={menu_class}
                    initial="initial"
                    animate="animate"
                    variants={isMenuClicked ? menuVariantsIn : menuVariantsOut}
                >
                    <div className='menu-left-side' />
                    <div className='menu-right-side'>
                        {menuLinks.map(({ title, url }, i) => (
                            <motion.p
                                key={url}
                                className='menu-link'
                                onClick={closeMenu}
                                initial='initial'
                                animate='animate'
                                variants={isMenuClicked ? pVariantsIn : pVariantsOut}
                                custom={i}
                                whileHover={{
                                    scale: 1.015,
                                    color: '#FBA91B',
                                    transition: {
                                        duration: 0.2
                                    }
                                }}
                            >
                                <Link
                                    to={url}
                                    className={
                                        currentUrl === url ?
                                            'menu-link-text selected-menu-link'
                                            : 'menu-link-text '
                                    }
                                >
                                    {title}
                                </Link>
                            </motion.p>
                        ))}

                        <motion.p
                            className='menu-address'
                            variants={isMenuClicked ? fadeIn : fadeOut}
                            custom={0.9}
                        >
                            <motion.a
                                target='_blank'
                                href="https://goo.gl/maps/HVAG3DTjWEAdFD7WA"
                                whileHover={toWhiteColor}
                            >
                                123112, ГОРОД МОСКВА,<br />
                                НАБЕРЕЖНАЯ ПРЕСНЕНСКАЯ,<br />
                                ДОМ 10, ЭТАЖ 43 ПОМ I КОМ 1-8
                            </motion.a>
                        </motion.p>
                        <motion.p
                            className='menu-phone'
                            variants={isMenuClicked ? fadeIn : fadeOut}
                            custom={1.1}
                        >
                            <motion.a href="tel:84994260423"
                                whileHover={toWhiteColor}
                            >
                                +7 (499) 426-04-23
                            </motion.a>
                        </motion.p>
                        <motion.p
                            className='menu-mail'
                            variants={isMenuClicked ? fadeIn : fadeOut}
                            custom={1.3}
                        >
                            <motion.a
                                href="mailto:info@smseng.ru"
                                whileHover={toWhiteColor}
                            >
                                info@smseng.ru
                            </motion.a>
                        </motion.p>
                    </div>
                </motion.div>
            </header >
            <Outlet />
        </>
    )
}

export default Header