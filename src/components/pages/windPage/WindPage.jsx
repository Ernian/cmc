import SectionElementPage from '../../sectionElementPage/SectionElementPage'
import { windPageData } from '../../data'

const WindPage = () => (
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
        {...windPageData}
    />
)

export default WindPage