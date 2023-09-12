const Dot: React.FC<{ active: boolean }> = (props: { active: boolean }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='48'
        height='48'
        viewBox='0 0 48 48'
        className={props.active ? 'dot dot-active' : 'dot dot-inactive'}
    >
        <path
            stroke='currentColor'
            fill='currentColor'
            stroke-width='4'
            d='M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z'
        />
    </svg>
)

export default Dot
