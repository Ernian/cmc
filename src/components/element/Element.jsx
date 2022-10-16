import { motion } from 'framer-motion'

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
        setActiveElement(elementsState => {
            return {
                heat: false,
                water: false,
                wind: false,
                cold: false,
                [type]: true,
            }
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
                duration: .8,
                ease: 'easeInOut'
            }

        }
    }

    const svgMoveVariants = {
        hidden: { x: 0 },
        visible: {
            x: elementsState[type] ? (leftSide ? - 720 : 555) : null,
            transition: {
                duration: .4,
                ease: 'easeInOut',
            }
        },
    }

    const titleVariants = {
        hidden: {
            opacity: 0,
            width: 196,
        },
        visible: {
            opacity: 1,
            width: 550,
            transition: {
                duration: .4,
                ease: 'easeInOut'
            }
        }
    }

    return (
        <>

            <motion.div
                initial='hidden'
                animate='visible'
                variants={elementsState[type] ? svgMoveVariants : svgAppearanceVariants}
                className={`element ${type}`}
                onMouseEnter={onEnter}
            >
                <img src={svg} alt={type} />
            </motion.div>
            <motion.div
                style={{
                    backgroundColor: color,
                    textAlign: leftSide ? 'right' : 'left',
                }}
                className={`element-title ${type}`}
                initial='hidden'
                animate={elementsState[type] ? 'visible' : ''}
                variants={titleVariants}
                onMouseLeave={onLeave}
            >
                <p style={{ margin: 0 }}>{title}</p>
            </motion.div>

        </>

    )
}

export default Element