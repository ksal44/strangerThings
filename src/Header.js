import styles from './Header.module.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const Header = ({logout}) => {

    return (
        <header className={styles.headerContainer}>
            <h2 className={styles.title}>Stranger Things</h2>
            <Router forceRefresh>
            <ul className={styles.list}>
                <li className={styles.linkItem}>
                    <Link to="/" className={styles.links}>Home</Link>
                </li>
                <li className={styles.linkItem}>
                    <Link to="/posts" className={styles.links}>Posts</Link>
                </li>
                <li className={styles.linkItem}>
                    <Link to="/makePost" className={styles.links}>Make Post</Link>
                </li>
                <li className={styles.linkItem}>
                    <Link to="/login" className={styles.links}
                    onClick={logout}>Logout</Link>
                </li>

            </ul>
            </Router>
        </header>

    )
}

export default Header