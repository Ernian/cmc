import { useState } from 'react'
import Element from '../element/Element'
import { elementsProps } from '../data'
import './ready.css'

const ReadyDecision = () => {
    const [elementsState, setActiveElement] = useState({
        heat: false,
        water: false,
        wind: false,
        cold: false
    })

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