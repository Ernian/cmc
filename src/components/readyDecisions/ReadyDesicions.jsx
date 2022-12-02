import { useState, useEffect } from 'react'
import useAppContext from '../hooks/useAppContext'
import Element from '../element/Element'
import { elementsProps } from '../data'
import './ready.css'
import './responseReady.css'

const ReadyDecision = () => {
    const [elementsState, setActiveElement] = useState({
        heat: false,
        water: false,
        wind: false,
        cold: false
    })

    const { screenWidth } = useAppContext()

    useEffect(() => {
        if (screenWidth <= 595) {
            elementsProps[0].position.end = { x: -110, y: -110 }
            elementsProps[1].position.end = { x: 4, y: -110 }
            elementsProps[2].position.end = { x: -110, y: 4 }
            elementsProps[3].position.end = { x: 4, y: 4 }
        }
        if (screenWidth > 595) {
            elementsProps[0].position.end = { x: -161, y: -161 }
            elementsProps[1].position.end = { x: 5, y: -161 }
            elementsProps[2].position.end = { x: -161, y: 5 }
            elementsProps[3].position.end = { x: 5, y: 5 }
        }
    }, [screenWidth])

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