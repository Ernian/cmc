import { useEffect } from 'react'
import SectionMenuPage from '../../sectionMenuPage/SectionMenuPage'
import { productionPageData } from '../../data'

const ProductionPage = ({ setMenuColors }) => {
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