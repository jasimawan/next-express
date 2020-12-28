// import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { UserConsumer } from '../contexts/UserContext';
import styles from '../styles/header.module.scss';
function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={'container'}>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <h1>Logo</h1>
                    </div>
                    <nav className={styles.right}>
                        <ul>
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/about'}>About</Link>
                            </li>
                            <UserConsumer>
                                {({ user, logOut }) =>
                                    user ? (
                                        <>
                                            <li>
                                                <button
                                                    className={
                                                        'btn btn-primary'
                                                    }
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        logOut();
                                                    }}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                            <li>
                                                <p>Welcome! {user.email}</p>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <Link href={'/login'}>
                                                    Login
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/signup'}>
                                                    Sign Up
                                                </Link>
                                            </li>
                                        </>
                                    )
                                }
                            </UserConsumer>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
