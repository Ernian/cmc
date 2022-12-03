import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MArrow } from '../arrow/Arrow'
import useAppContext from '../hooks/useAppContext'
import {
    leftSideVariants,
    rightSideVariants,
    titleAppear,
    arrowAppear
} from '../animationVariants'
import './SectionElementPage.css'

const SectionElementPage = ({
    sectionTitle,
    articleList,
    pageBottomImg,
    menuColors,
    mobileMenuColors,
    css,
    svg,
}) => {

    const { globalMenuColors, setMenuColors, screenWidth } = useAppContext()
    useEffect(() => {
        if (screenWidth <= 595 && globalMenuColors.menuColor !== mobileMenuColors.menuColor) {
            setMenuColors(mobileMenuColors)
        }
        if (screenWidth > 595 && globalMenuColors.menuColor !== menuColors.menuColor) {
            setMenuColors(menuColors)
        }
    }, [screenWidth])

    const [selectedArticle, setSelectedArticle] = useState(null)
    const imgRef = useRef()

    const selectArticle = article => {
        if (selectedArticle === null) {
            setSelectedArticle(article)
        }
        if (selectedArticle && selectedArticle?.title !== article.title) {
            if (article.img) {
                imgRef.current.style.animation = 'fade-out .3s ease-in-out'
                imgRef.current.style.animationFillMode = 'backwards'
                setTimeout(() => {
                    setSelectedArticle(article)
                    imgRef.current.style.animation = 'fade-in .3s ease-in-out'
                    imgRef.current.style.animationFillMode = 'backwards'
                }, 200)
            } else {
                setSelectedArticle(article)
            }
        }
    }

    return (
        <div className='section-container'>
            <motion.div
                className='section-left-side'
                initial='initial'
                animate='animate'
                variants={leftSideVariants}
                style={{
                    backgroundColor: css.leftSideColor
                }}
            >
                {selectedArticle?.img &&
                    <div style={{ opacity: '0.5' }}>
                        <motion.img
                            ref={imgRef}
                            src={selectedArticle.img}
                            alt={selectedArticle.title}
                        />
                    </div>
                }
                <MArrow
                    stroke={css.arrowColor}
                    variants={arrowAppear}
                />
                {!!svg && <img src={svg} alt={sectionTitle} className='svg-bg' />}
                <h2 className='mobile-section-title'>{sectionTitle}</h2>
            </motion.div>
            <motion.div
                className='section-right-side'
                initial='initial'
                animate='animate'
                variants={rightSideVariants}
                style={{
                    backgroundColor: css.rightSideColor
                }}
            >
                <div className='section-top-img' />
                <div
                    className='section-bottom-img'
                    style={{ backgroundImage: `url(${pageBottomImg})` }}
                />
                <motion.h1
                    className='section-title'
                    variants={titleAppear}
                    initial='initial'
                    animate='animate'
                    custom={0}
                    style={{
                        color: css.titleColor,
                        fontSize: css.titleFontSize,
                        lineHeight: css?.lineHeight
                    }}
                >
                    {sectionTitle}
                </motion.h1>

                {articleList.map((article, i) => (
                    <motion.p
                        key={article.title}
                        initial='initial'
                        animate='animate'
                        variants={titleAppear}
                        custom={i + 1}
                        onMouseEnter={() => selectArticle(article)}
                        style={{ marginLeft: screenWidth > 595 ? 75 : 30 }}
                    >
                        <Link
                            to={article.url}
                            className='article-title'
                            style={{
                                color: selectedArticle?.title === article.title ?
                                    css.articleTitleHoverColor
                                    : css.articleTitleColor
                            }}
                        >
                            {article.title}
                        </Link>
                    </motion.p>
                ))}
            </motion.div>
        </div>
    )
}

export default SectionElementPage