import SectionElementPage from '../../sectionElementPage/SectionElementPage'
import { heatPageData } from '../../data'

const HeatePage = () => (
    <SectionElementPage
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
        {...heatPageData}
    />
)

export default HeatePage