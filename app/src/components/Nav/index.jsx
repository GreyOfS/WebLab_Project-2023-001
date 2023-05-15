import './style.scss';
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react';

function Nav({ children }) {

    const [isExpand, setIsExpand] = useState(false)

    const expand = () => {
        setIsExpand(true);
    }

    const wrap = () => {
        setIsExpand(false);
    }

    return(
        <section className={`nav${isExpand ? " nav--expand" : ""}`}>
            <nav className='nav_cards' onClick={wrap}>
                { children }
            </nav>
            {!isExpand && <FaAngleDown className='nav_behavior' onClick={expand}/>}
        </section>
    )
}

export default Nav;