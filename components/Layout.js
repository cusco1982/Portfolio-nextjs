import Toolbar from './Toolbar.js'
import Footer from './Footer.js';
import styles from '../styles/Layout.module.css';
import React, { useEffect } from 'react';




const Layout = ({ children }) => {



    useEffect(() => {
        var navHeight = document.getElementById('navContainer').offsetHeight;
        // console.log(navHeight);

        var mainContent = document.getElementById("mainContainer");
        mainContent.style.marginTop = navHeight + "px";





    }, [])





    return (

        <>


            <Toolbar/>

            <div id="mainContainer" className={styles.container}>

                {children}

            </div>

            <Footer />


        </>

    )
}
export default Layout
