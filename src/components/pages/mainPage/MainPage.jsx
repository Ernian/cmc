import { useEffect } from 'react'
import ReadyDecision from '../../readyDecisions/ReadyDesicions'

const MainPage = ({ setMenuColors }) => {
    useEffect(() => {
        setMenuColors({
            logoMenuClose: '#FBA91B',
            logoMenuOpen: '#FFF',
            menuColor: '#FBA91B',
        })
    }, [])

    return <ReadyDecision />
}

export default MainPage