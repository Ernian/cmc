import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './sectionMenuPage.css'

const SectionMenuPage = ({
    sectionTitle,
    articleList,
    imgBottom,
}) => {

    const [selectedArticle, setSelectedArticle] = useState(null)
    const pRef = useRef()
    const imgRef = useRef()

    const leftSideVariants = {
        initial: {
            opacity: 0,
            y: '-100vh'
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
                delay: .3,
                ease: 'easeInOut',
            }
        },
    }

    const rightSideVariants = {
        initial: {
            opacity: 0,
            y: '100vh'
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
                delay: .3,
                ease: 'easeInOut',
            }
        },
    }

    const titleAppear = {
        initial: {
            opacity: 0,
            x: '50vw',
        },
        animate: delay => (
            {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.2,
                    delay: .8 + delay / 8,
                }
            }
        )
    }

    const selectArticleHVariants = {
        initial: {},
        animate: {
            y: '-18vh',
            fontSize: '36px',
            lineHeight: '60px',
            transition: {
                duration: 0.3,
            }
        }
    }

    const selectArticleLiVariants = {
        initial: {},
        animate: {
            opacity: 1,
            y: '-24vh',
            x: '-8.5vw',
            scale: 0.7,
            transition: {
                duration: 0.3,
            }
        }
    }

    const pVariants = {
        initial: {
            opacity: 0,
            y: '50vh',
        },
        animate: {
            opacity: 1,
            y: '-24vh',
            transition: {
                duration: 0.3,
                delay: 0.2,
            }
        },
    }

    const selectArticle = (article) => {
        if (selectedArticle === null) {
            setSelectedArticle(article)
        }
        if (selectedArticle && selectedArticle?.title !== article.title) {
            pRef.current.style.animation = 'fade-out .3s ease-in-out'
            pRef.current.style.animation = 'fade-out .3s ease-in-out'
            imgRef.current.style.animation = 'fade-out .3s ease-in-out'
            imgRef.current.style.animationFillMode = 'backwards'
            setTimeout(() => {
                setSelectedArticle(article)
                pRef.current.style.animation = 'fade-in .3s ease-in-out'
                pRef.current.style.animationFillMode = 'backwards'
                imgRef.current.style.animation = 'fade-in .3s ease-in-out'
                imgRef.current.style.animationFillMode = 'backwards'
            }, 300)
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
                    <motion.img
                        // className='section-menu-img'
                        ref={imgRef}
                        style={{ display: 'block' }}
                        src={selectedArticle.img}
                        alt={selectedArticle.title}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.3
                            }
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.3
                            }
                        }}
                    />}
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
                    style={{ backgroundImage: `url(${imgBottom})` }}
                />
                <motion.h1
                    className='section-title'
                    variants={selectedArticle ? selectArticleHVariants : titleAppear}
                    initial='initial'
                    animate='animate'
                    custom={0}
                >
                    {sectionTitle}
                </motion.h1>

                <motion.ul
                    initial='initial'
                    animate='animate'
                    variants={selectedArticle && selectArticleLiVariants}
                >
                    {articleList.map((article, i) => (
                        <motion.li
                            key={article.title}
                            className={selectedArticle?.title === article.title
                                ? 'article-title article-title-selected '
                                : 'article-title'}
                            initial='initial'
                            animate='animate'
                            variants={titleAppear}
                            custom={i}
                            onClick={() => selectArticle(article)}
                        >
                            {article.title}
                        </motion.li>
                    ))}
                </motion.ul>
                {
                    selectedArticle && (
                        <motion.div
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            variants={pVariants}
                            className='article-text'
                            ref={pRef}
                        >
                            {selectedArticle.text}
                        </motion.div>
                    )
                }
            </motion.div>
        </div>
    )
}

export default SectionMenuPage