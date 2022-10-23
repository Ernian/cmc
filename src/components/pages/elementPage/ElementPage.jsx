import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import Header from '../../header/Header'
import './elementPage.css'
import { data } from './data'

const ElementPage = () => {
    const { element } = useParams()
    const props = data.find(item => item.element === element)

    const leftSide = {
        initial: {
            opacity: 0,
            y: '-100vh'
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: 'easeInOut',
            }
        },
    }

    const rightSide = {
        initial: {
            opacity: 0,
            y: '100vh'
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: 'easeInOut',
            }
        },
    }

    return (
        <>
            <Header
                logoColors={{
                    menuClose: '#FBA91B',
                    menuOpen: '#FFF'
                }} />
            <div style={{ display: 'flex' }}>
                <motion.div
                    className='left-side'
                    style={{
                        backgroundColor: props ? props.color : '#ddd'
                    }}
                    initial='initial'
                    animate='animate'
                    variants={leftSide}
                />
                <motion.div
                    className='right-side'
                    initial='initial'
                    animate='animate'
                    variants={rightSide}
                >
                    <h1 style={{ color: props ? props.color : '#ddd' }}>
                        {props ? props.title : 'aaa'}
                        {window.location.pathname}
                    </h1>
                </motion.div>
            </div>
        </>
    )
}

export default ElementPage