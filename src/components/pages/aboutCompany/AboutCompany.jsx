import { useEffect } from 'react'
import { motion } from 'framer-motion'
import useAppContext from '../../hooks/useAppContext'
import {
    leftSideVariants,
    rightSideVariants,

} from '../../animationVariants'
import './aboutCompany.css'

const AboutCompany = ({ menuColors }) => {
    const { setMenuColors } = useAppContext()
    useEffect(() => {
        setMenuColors(menuColors)
    }, [])

    return (
        <div className='section-container'>
            <motion.div
                className='section-left-side'
                style={{
                    backgroundColor: '#FBA91B'
                }}
                initial='initial'
                animate='animate'
                variants={leftSideVariants}
            >
                <h2 className='left-header'>О КОМПАНИИ</h2>
                <p className='left-text'>СМС-Инжиниринг ориентирована на комплексную реализацию проект «под ключ». Мы помогаем
                    заказчику найти оптимальное соотношение между
                    капитальными и операционными расходами на
                    инженерные системы. Наша команда стремится построить долгосрочные, надежные и открытые отношения с заказчиком.

                </p>
                <p className='author'>Баходур Темиров</p>
            </motion.div>
            <motion.div
                className='section-right-side'
                style={{
                    backgroundColor: ' #25262A'
                }}
                initial='initial'
                animate='animate'
                variants={rightSideVariants}
            >
                <h2 className='right-header'>МИССИЯ КОМПАНИИ</h2>
                <p className='right-text'>Предложить лучшее и подходящее решения для достижения поставленных целей заказчика.
                    Основные акценты при реализации объектов: стремление к высокому качеству, планирование и выполнение в поставленные сроки
                </p>
            </motion.div>
        </div>
    )
}

export default AboutCompany