
import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styles from "./home.module.css"


const Home = () => {


    return (
        <div className={styles.homePage}>
            <h1 className={styles.title}>Home</h1>
            <br />

            <Router forceRefresh>
            <div className={styles.linkContainer}>
                <h3 className={styles.prompt}>Where would you like to go?</h3>
            <ul className={styles.list}>
                <li className={styles.linkItem}>
                    <Link to="/posts" className={styles.links}>Posts</Link>
                </li>
                <li className={styles.linkItem}>
                    <Link to="/makePost" className={styles.links}>Make a Post!</Link>
                </li>
                <li className={styles.linkItem}>
                    <Link to="/login" className={styles.links}>Logout</Link>
                </li>
            </ul>
            </div>
            </Router>
            
        </div>
    )
}

export default Home