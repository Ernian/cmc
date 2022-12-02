import { Link } from 'react-router-dom'
import { elementsProps } from '../data'

const MenuElements = ({ closeMenu }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                maxWidth: 320,
            }}
        >
            {elementsProps.map(({ type, svg }) => (
                <Link
                    key={type}
                    to={`/${type}`}
                    onClick={closeMenu}
                >
                    <img src={svg} alt={type} />
                </Link>
            ))}
            <p
                style={{
                    padding: 0,
                    margin: '0 auto',
                    textAlign: 'center',
                    fontSize: '26px',
                    LineHeigt: '33px',
                    letterSpacing: '0.174em',
                    color: '#FFF',
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                }}
            >
                смс инжиниринг
            </p>
        </div>
    )
}

export default MenuElements