import Header from '../../header/Header'
import ReadyDecision from '../../readyDecisions/ReadyDesicions'

function MainPage() {
    return (
        <>
            <Header
                logoColors={{
                    menuClose: '#FBA91B',
                    menuOpen: '#FFF'
                }}
            />
            <ReadyDecision />
        </>
    )
}

export default MainPage