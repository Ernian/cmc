import Element from '../element/Element'
import './elements.css'

import heat from '../../assets/svg/heat.svg'
import water from '../../assets/svg/water.svg'
import wind from '../../assets/svg/wind.svg'
import condition from '../../assets/svg/condition.svg'

function ReadyDecision() {
    const elements = [
        {
            svg: heat,
            position: { x: '-102%', y: '-102%' },
            type: 'heat',
        },
        {
            svg: water,
            position: { x: '2%', y: '-102%' },
            type: 'water',
        },
        {
            svg: wind,
            position: { x: '-102%', y: '2%' },
            type: 'wind',
        },
        {
            svg: condition,
            position: { x: '2%', y: '2%' },
            type: 'condition',
        },
    ]

    return (
        <>
            {elements.map(element => <Element {...element} key={element.type} />)}
            <p
                className='ready-desicion-text'
                style={{
                    animation: `fade-in .3s ease-in-out`,
                    animationFillMode: 'backwards',
                    animationDelay: '1s'
                }}
            >готовые решения</p>
        </>

    )
}

export default ReadyDecision