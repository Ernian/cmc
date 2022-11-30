import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Arrow = forwardRef(({ stroke }, ref) => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <svg
            ref={ref} width="74"
            height="46" viewBox="0 0 74 46"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            className='arrow-back'
            onClick={goBack}
        >
            <path d="M71 26C72.6569 26 74 24.6569 74 23C74 21.3431 72.6569 20 71 20V26ZM0.878677 20.8787C-0.292892 22.0503 -0.292892 23.9497 0.878677 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.7868C23.0416 0.615223 21.1421 0.615223 19.9706 1.7868L0.878677 20.8787ZM71 20L3 20V26L71 26V20Z" fill={`${stroke}`} />
        </svg>
    )
})

export const MArrow = motion(Arrow)