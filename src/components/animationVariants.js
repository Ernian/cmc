export const leftSideVariants = {
    initial: {
        opacity: 0,
        y: '-100vh'
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
            delay: .3,
            ease: 'easeInOut',
        }
    },
}

export const rightSideVariants = {
    initial: {
        opacity: 0,
        y: '100vh'
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
            delay: .3,
            ease: 'easeInOut',
        }
    },
}

export const titleAppear = {
    initial: {
        opacity: 0,
        x: '50vw',
    },
    animate: delay => (
        {
            opacity: 1,
            x: delay ? '1vw' : '-0.5vw',
            transition: {
                duration: 0.2,
                delay: .8 + delay / 8,
            }
        }
    )
}

export const textAppear = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 1.1,
        }
    }
}

export const imgAppear = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 0.6
        }
    }
}

export const arrowAppear = {
    initial: {
        opacity: 0,
        rotate: 180,
        scale: 0.4,
    },
    animate: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            delay: 0.8,
        }
    }
}