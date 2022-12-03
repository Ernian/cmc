import SectionElementPage from '../../sectionElementPage/SectionElementPage'
import { coldPageData } from '../../data'

const ColdPage = () => (
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
        {...coldPageData}
    />
)

export default ColdPage