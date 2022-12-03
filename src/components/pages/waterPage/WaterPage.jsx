import SectionElementPage from '../../sectionElementPage/SectionElementPage'
import { waterPageData } from '../../data'

const WaterPage = () => (
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
        {...waterPageData}
    />
)

export default WaterPage