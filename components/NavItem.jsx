import React from 'react'
import Link from "next/link"

const NavItem = ({ href, text, active }) => {
    return (
        <div>


            <Link href={href}>


                <a className={`nav__link ${active ? "active" : ""}`}>

                    {text}

                </a>



            </Link>



        </div>
    )
}

export default NavItem
