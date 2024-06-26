const Arrow: React.FC<{ right: boolean }> = (props: { right: boolean }) => {
    return props.right ? (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
        >
            <path
                fill='none'
                stroke='currentColor'
                d='M12 1.5c0 1.11 1.1 2.771 2.212 4.166c1.432 1.796 3.141 3.365 5.102 4.563c1.469.897 3.253 1.758 4.686 1.758M12 22.5c0-1.11 1.1-2.771 2.212-4.166c1.432-1.796 3.141-3.365 5.102-4.563c1.469-.897 3.253-1.758 4.686-1.758M24 12H0'
            />
        </svg>
    ) : (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
        >
            <g transform='rotate(180 12 12)'>
                <path
                    fill='none'
                    stroke='currentColor'
                    d='M12 1.5c0 1.11 1.1 2.771 2.212 4.166c1.432 1.796 3.141 3.365 5.102 4.563c1.469.897 3.253 1.758 4.686 1.758M12 22.5c0-1.11 1.1-2.771 2.212-4.166c1.432-1.796 3.141-3.365 5.102-4.563c1.469-.897 3.253-1.758 4.686-1.758M24 12H0'
                />
            </g>
        </svg>
    )
}

export default Arrow
