import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { leftSideVariants, rightSideVariants, titleAppear } from '../animationVariants'
import './sectionMenuPage.css'

const SectionMenuPage = ({
    sectionTitle,
    articleList,
    productionPageBottomImg,
}) => {

    const [selectedArticle, setSelectedArticle] = useState(null)
    const imgRef = useRef()

    // const leftSideVariants = {
    //     initial: {
    //         opacity: 0,
    //         y: '-100vh'
    //     },
    //     animate: {
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             duration: .5,
    //             delay: .3,
    //             ease: 'easeInOut',
    //         }
    //     },
    // }

    // const rightSideVariants = {
    //     initial: {
    //         opacity: 0,
    //         y: '100vh'
    //     },
    //     animate: {
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             duration: .5,
    //             delay: .3,
    //             ease: 'easeInOut',
    //         }
    //     },
    // }

    // const titleAppear = {
    //     initial: {
    //         opacity: 0,
    //         x: '50vw',
    //     },
    //     animate: delay => (
    //         {
    //             opacity: 1,
    //             x: delay ? '1vw' : '-0.5vw',
    //             transition: {
    //                 duration: 0.2,
    //                 delay: .8 + delay / 8,
    //             }
    //         }
    //     )
    // }

    const selectArticle = article => {
        if (selectedArticle === null) {
            setSelectedArticle(article)
        }
        if (selectedArticle && selectedArticle?.title !== article.title) {
            imgRef.current.style.animation = 'fade-out .3s ease-in-out'
            imgRef.current.style.animationFillMode = 'backwards'
            setTimeout(() => {
                setSelectedArticle(article)
                imgRef.current.style.animation = 'fade-in .3s ease-in-out'
                imgRef.current.style.animationFillMode = 'backwards'
            }, 200)
        }
    }

    return (
        <div className='section-container'>
            <motion.div
                className='section-left-side'
                initial='initial'
                animate='animate'
                variants={leftSideVariants}
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
            </motion.div>
            <motion.div
                className='section-right-side'
                initial='initial'
                animate='animate'
                variants={rightSideVariants}
            >
                <div className='section-top-img' />
                <div
                    className='section-bottom-img'
                    style={{ backgroundImage: `url(${productionPageBottomImg})` }}
                />
                <motion.h1
                    className='section-title'
                    variants={titleAppear}
                    initial='initial'
                    animate='animate'
                    custom={0}
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
                    >
                        <Link
                            to={article.url}
                            className={selectedArticle?.title === article.title ? 'article-title article-select' : 'article-title'}
                        >
                            {article.title}
                        </Link>
                    </motion.p>
                ))}
            </motion.div>
        </div>
    )
}

export default SectionMenuPage