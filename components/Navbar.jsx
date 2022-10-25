import React, { useState } from 'react';
import Link from 'next/link';
import NavItem from './NavItem.jsx';

const MENU_LIST = [
    {
        text: "Home",
        href: "/"
    }, {
        text: "Services",
        href: "/services"
    }, {
        text: "Contact",
        href: "/contact"
    }
]





const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <div>

            <header>
                <nav className="nav">

                    <Link href={"/"}>

                        <a onClick={() => setActiveIdx(0)}>
                            <h1 className="logo"> CodeWithMarish </h1>
                        </a>

                    </Link>


                    <div onClick={() => setNavActive(!navActive)} className="nav__menu-bar">
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>



                    <div className={`${navActive ? "active" : ""} nav__menu-list`}>

                        {MENU_LIST.map((menu, idx) => {
                            return (

                                <div onClick={() => {
                                    setActiveIdx(idx);
                                    setNavActive(false);
                                }}

                                    key={menu.text}
                                >


                                    <NavItem active={activeIdx === idx} {...menu} />


                                </div>

                            )
                        })}

                    </div>





                </nav>
            </header>



        </div>
    )
}

export default Navbar;
