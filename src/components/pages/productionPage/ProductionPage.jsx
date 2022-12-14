import SectionMenuPage from '../../sectionMenuPage/SectionMenuPage'
import { productionPageData } from '../../data'

const ProductionPage = () => (
    <SectionMenuPage
        menuColors={{
            logoMenuClose: '#FFF',
            logoMenuOpen: '#FFF',
            menuColor: '#FFF',
        }}
        mobileMenuColors={{
            logoMenuClose: '#000',
            logoMenuOpen: '#FFF',
            menuColor: '#000',
        }}
        {...productionPageData}
    />
)

export default ProductionPage