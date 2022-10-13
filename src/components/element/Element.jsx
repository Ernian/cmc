function Element({ svg, type, marginLeft, title, color, position }) {
    const css = {
        display: 'block',
    }
    if (marginLeft) css.marginLeft = 'auto'

    return (
        <>
            <div
                className='element'
                style={{
                    transform: position,
                    backgroundColor: color,
                    // opacity: 0,
                }}
            >
                <span className='element-title'>{title}</span>
            </div>
            <div
                style={{
                    animation: `${type}-appear .8s ease-in-out`,
                    animationFillMode: 'both',
                    zIndex: 10,
                    backgroundColor: '#1E1E1E',
                    opacity: 1,
                }}
                className={`element ${type}`}
            >
                <img
                    src={svg}
                    alt={type}
                    style={css}
                />
            </div>
        </>

    )
}

export default Element