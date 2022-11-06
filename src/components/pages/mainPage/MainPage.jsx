import { useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import ReadyDecision from '../../readyDecisions/ReadyDesicions'

const MainPage = () => {
    const { setMenuColors } = useAppContext()
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