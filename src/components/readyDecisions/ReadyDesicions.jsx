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
            type: 'heat',
            marginLeft: true,
            title: 'ТЕПЛО',
            color: '#EE423E',
            position: 'translate(-101%, -103%)',
        },
        {
            svg: water,
            type: 'water',
            marginLeft: false,
            title: 'ВОДА',
            color: '#20469A',
            position: 'translate(1%, -103%)',
        },
        {
            svg: wind,
            type: 'wind',
            marginLeft: true,
            title: 'ВОЗДУХ',
            color: '#FBA91B',
            position: 'translate(-101%, 3%)',

        },
        {
            svg: condition,
            type: 'condition',
            marginLeft: false,
            title: 'ХОЛОД',
            color: '#00B1B0',
            position: 'translate(1%, 3%)',
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
            >
                готовые решения
            </p>
        </>

    )
}

export default ReadyDecision