import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAppContext from '../hooks/useAppContext'
import { MArrow } from '../arrow/Arrow'
import {
    leftSideVariants,
    rightSideVariants,
    titleAppear,
    textAppear,
    imgAppear,
    arrowAppear
} from '../animationVariants'

const ArticlePage = ({ pageBottomImg, articleList, css, menuColors }) => {
    const { setMenuColors } = useAppContext()
    useEffect(() => {
        setMenuColors(menuColors)
    }, [])

    let { id } = useParams()
    id = String(+id - 1)
    const { title, text, img } = articleList[id]

    return (
        <div className='section-container'>
            <motion.div
                className='section-left-side'
                style={{
                    backgroundColor: css.leftSideColor
                }}
                initial='initial'
                animate='animate'
                variants={leftSideVariants}
            >
                {img ? <motion.img
                    src={img}
                    alt={title}
                    variants={imgAppear}
                /> : null}
                <MArrow
                    stroke={css.arrowColor}
                    variants={arrowAppear}
                />
            </motion.div>
            <motion.div
                className='section-right-side'
                style={{
                    backgroundColor: css.rightSideColor
                }}
                initial='initial'
                animate='animate'
                variants={rightSideVariants}
            >
                <div className='section-top-img' />
                <div
                    className='section-bottom-img'
                    style={{ backgroundImage: `url(${pageBottomImg})` }}
                />
                <motion.h1
                    className='section-title'
                    style={{
                        color: css.titleColor
                    }}
                    variants={titleAppear}
                >
                    {title}
                </motion.h1>
                <motion.div
                    variants={textAppear}
                    className='article-text'
                >
                    {text}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ArticlePage