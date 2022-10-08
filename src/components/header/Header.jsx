import logo from '../../assets/svg/Logo.svg'

function Header() {
    return (
        <nav className='nav-menu'>
            <img src={logo} alt="logo" className='logo' />
        </nav>
    )
}

export default Header