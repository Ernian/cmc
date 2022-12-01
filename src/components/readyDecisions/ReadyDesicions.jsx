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
            elementsProps[0].position.end = { x: -108, y: -108 }
            elementsProps[1].position.end = { x: 5, y: -108 }
            elementsProps[2].position.end = { x: -108, y: 5 }
            elementsProps[3].position.end = { x: 5, y: 5 }
        }
        if (screenWidth > 595) {
            elementsProps[0].position.end = { x: -162, y: -162 }
            elementsProps[1].position.end = { x: 5, y: -162 }
            elementsProps[2].position.end = { x: -162, y: 5 }
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