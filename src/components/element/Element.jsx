function Element({ svg, position, type }) {
    return (
        <div
            style={{
                animation: `${type}-appear .4s ease-in-out`,
                animationFillMode: 'both'
            }}
            className={`${type} element`}
        >
            <img src={svg} alt={type} />
        </div>
    )
}

export default Element