import Toolbar from './Toolbar.js'
import Footer from './Footer.js'
import styles from '../styles/Layout.module.css'

import React, { useEffect } from 'react';



const Layout = ({ children }) => {





    // useEffect(() => {
    
    //     console.log(window.location.href)
    //     const homeLink = document.querySelector("homelink");
    //     homeLink.addClass
    
    //   }, []);




    return (

        <>

        
            <Toolbar />

            <div className={styles.container}>

                {children}

            </div>

            <Footer />


        </>

    )
}
export default Layout
