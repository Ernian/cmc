import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Element = ({
    svg,
    type,
    leftSide,
    title,
    color,
    position,
    elementsState,
    setActiveElement
}) => {

    const onEnter = () => {
        setActiveElement({
            heat: false,
            water: false,
            wind: false,
            cold: false,
            [type]: true,
        })
    }

    const onLeave = () => {
        setActiveElement({
            heat: false,
            water: false,
            wind: false,
            cold: false
        })
    }

    const svgAppearanceVariants = {
        hidden: {
            opacity: 0,
            x: position.start.x,
            y: position.start.y,
        },
        visible: {
            opacity: 1,
            x: position.end.x,
            y: position.end.y,
            transition: {
                duration: 0.6,
                ease: 'easeInOut'
            }

        }
    }

    const svgMoveVariants = {
        hidden: { x: 0 },
        visible: {
            x: elementsState[type] ? (leftSide ? -740 : 546) : null,
            transition: {
                duration: .3,
                ease: 'easeInOut',
            }
        },
    }

    const titleVariants = {
        hidden: {
            opacity: 0,
            width: 0,
        },
        visible: {
            display: 'block',
            opacity: 1,
            width: 550,
            transition: {
                duration: .3,
                ease: 'easeOut',
            }
        },
    }

    return (
        <Link to={`/${type}`}>
            <motion.div
                initial='hidden'
                animate='visible'
                variants={elementsState[type] ? svgMoveVariants : svgAppearanceVariants}
                className={`element ${type}`}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
            >
                <img src={svg} alt={type} />
            </motion.div>
            <motion.div
                style={{
                    backgroundColor: color,
                    textAlign: leftSide ? 'right' : 'left',
                    borderRadius: leftSide ? '0px 10px 10px 0px' : '10px 0px 0px 10px',
                }}
                className={`element-title ${type}`}
                initial='hidden'
                animate={elementsState[type] ? 'visible' : ''}
                variants={titleVariants}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
            >
                <p style={{ margin: 0 }}>{title}</p>
            </motion.div>
        </Link>
    )
}

export default Element