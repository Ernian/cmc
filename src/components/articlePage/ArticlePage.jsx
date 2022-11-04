import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import arrowBack from '../../assets/svg/arrow-back.svg'
import {
    leftSideVariants,
    rightSideVariants,
    titleAppear,
    textAppear,
    imgAppear,
    arrowAppear
} from '../animationVariants'

const ArticlePage = ({ productionPageBottomImg, article: { title, text, img } }) => {

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <div className='section-container'>
            <motion.div
                className='section-left-side'
                initial='initial'
                animate='animate'
                variants={leftSideVariants}
            >
                <motion.img
                    src={img}
                    alt={title}
                    variants={imgAppear}
                />
                <motion.img
                    className='arrow-back'
                    src={arrowBack}
                    alt='back'
                    onClick={goBack}
                    variants={arrowAppear}
                />

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