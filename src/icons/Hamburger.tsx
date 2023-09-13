const Hamburger: React.FC = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        className="hamburger-menu"
    >
        <path
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M3 17h18M3 12h18M3 7h18'
        />
    </svg>
)

export default Hamburger