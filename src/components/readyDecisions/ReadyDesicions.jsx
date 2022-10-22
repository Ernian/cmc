import { useState } from 'react'
import Element from '../element/Element'
import './ready.css'

import heat from '../../assets/svg/heat.svg'
import water from '../../assets/svg/water.svg'
import wind from '../../assets/svg/wind.svg'
import cold from '../../assets/svg/cold.svg'

const ReadyDecision = () => {
    const [elementsState, setActiveElement] = useState({
        heat: false,
        water: false,
        wind: false,
        cold: false
    })

    const elementsProps = [
        {
            svg: heat,
            type: 'heat',
            leftSide: true,
            title: 'ТЕПЛО',
            color: '#EE423E',
            position: {
                start: {
                    x: -800,
                    y: -450,
                },
                end: {
                    x: -201,
                    y: -201,
                }
            },
        },
        {
            svg: water,
            type: 'water',
            leftSide: false,
            title: 'ВОДА',
            color: '#20469A',
            position: {
                start: {
                    x: 800,
                    y: -450,
                },
                end: {
                    x: 5,
                    y: -201,
                }
            },
        },
        {
            svg: wind,
            type: 'wind',
            leftSide: true,
            title: 'ВОЗДУХ',
            color: '#FBA91B',
            position: {
                start: {
                    x: -800,
                    y: 450,
                },
                end: {
                    x: -201,
                    y: 5,
                }
            },

        },
        {
            svg: cold,
            type: 'cold',
            leftSide: false,
            title: 'ХОЛОД',
            color: '#00B1B0',
            position: {
                start: {
                    x: 800,
                    y: 450,
                },
                end: {
                    x: 5,
                    y: 5,
                }
            },
        },
    ]

    return (
        <>
            {elementsProps.map(element => {
                return <Element
                    key={element.type}
                    {...element}
                    elementsState={elementsState}
                    setActiveElement={setActiveElement}
                />
            })}
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