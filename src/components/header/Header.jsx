import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import logo from '../../assets/svg/logo.svg'
import './header.css'

const Header = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const menuVariantsIn = {
        initial: {
            x: '100vh',
            display: 'none',
        },
        animate: {
            x: 0,
            display: 'flex',
            transition: {
                duration: 0.4,
                ease: 'easeInOut'
            }
        }
    }
    const menuVariantsOut = {
        initial: {
            x: 0,
        },
        animate: {
            x: '120vh',
            transition: {
                duration: 0.4,
                ease: 'easeInOut'
            }
        }
    }

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
                <p className='menu-link'><Link to='/company' className='menu-link-text'>О КОМПАНИИ</Link></p>
                <p className='menu-link'><Link to='/objects' className='menu-link-text'>РЕАЛИЗОВАННЫЕ ОБЪЕКТЫ</Link></p>
                <p className='menu-link'> <Link to='/realization' className='menu-link-text'>КОМПЛЕКСНАЯ РЕАЛИЗАЦИЯ</Link></p>
                <p className='menu-link'><Link to='/engineering' className='menu-link-text'>ПРОЕКТИРОВАНИЕ ОБЪЕКТОВ</Link></p>
                <p className='menu-link'><Link to='/production' className='menu-link-text'>ПРОИЗВОДСТВО ОБОРУДОВАНИЯ</Link></p>

                <p className='menu-address'>123112, ГОРОД МОСКВА,<br />
                    НАБЕРЕЖНАЯ ПРЕСНЕНСКАЯ,<br />
                    ДОМ 10, ЭТАЖ 43 ПОМ I КОМ 1-8
                </p>
                <p className='menu-phone'>+7 (499) 426-04-23</p>
                <p className='menu-mail'>info@smseng.ru</p>
            </motion.div>
        </header>
    )
}

export default Header