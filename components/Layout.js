import Toolbar from './Toolbar.js'
// import Footer from './Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (

        <>

        
            <Toolbar />

            <div className={styles.container}>

                {children}

            </div>

            {/* <Footer /> */}


        </>

    )
}
export default Layout
