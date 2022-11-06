import { useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import SectionMenuPage from '../../sectionMenuPage/SectionMenuPage'
import { productionPageData } from '../../data'

const ProductionPage = () => {
    const { setMenuColors } = useAppContext()
    useEffect(() => {
        setMenuColors({
            logoMenuClose: '#FFF',
            logoMenuOpen: '#FFF',
            menuColor: '#FFF',
        })
    }, [])

    return <SectionMenuPage
        {...productionPageData}
    />
}

export default ProductionPage