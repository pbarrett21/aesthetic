import { useEffect, useRef } from "react";

const MobileMenu: React.FC<{ hidden: boolean }> = (props: {
    hidden: boolean;
}) => {
    const menu = useRef(null);

    useEffect(() => {
        if (props.hidden) {
            console.log("hide");
            menu.current.classList.toggle("hide");
        } else {
            console.log("show", menu.current);
            menu.current.classList.toggle("hide");
        }
    }, [props.hidden]);

    return (
        <div className='mobile-menu hide' ref={menu}>
            <ul>
                <li>item 1</li>
            </ul>
        </div>
    );
};

export default MobileMenu;
