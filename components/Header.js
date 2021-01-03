// import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { UserConsumer } from '../contexts/UserContext';
import styled from 'styled-components';

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLeftItems = styled.div`
    flex-grow: 1;
    h1 {
        font-size: 4rem;
    }
`;

const HeaderRightItems = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            padding: 0.5em 1em;
            display: inline-block;
            text-align: center;
            a {
                font-size: 1.4rem;
                text-decoration: none;
            }
            p {
                margin: 0;
            }
        }
    }
`;

const Dropdown = styled.div`
    position: relative;
    cursor: pointer;
    p {
        .chevron::before {
            top: 0.55em;
        }
    }
    .body {
        position: absolute;
        width: 14em;
        /* display: none; */
        background-color: #fff;
        top: 1.7em;
        color: #fff;
        right: 0;
        border-radius: 0.4em;
        padding: 0.7em 1em;
        box-shadow: 1px 1px 10px #dad6d6;
        z-index: 1;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
        li {
            display: block !important;
            padding: 0 !important;
            text-align: right !important;
            padding-bottom: 1em !important;
            button {
                width: 100% !important;
                font-size: 1.03rem !important;
            }
            a {
                font-size: 1.03rem !important;
                width: 100%;
                display: block;
            }
        }
    }
    :hover {
        .body {
            visibility: visible;
            opacity: 1;
        }
    }
`;

function Header() {
    return (
        <div className={'container'}>
            <HeaderInner>
                <HeaderLeftItems>
                    <h1>Logo</h1>
                </HeaderLeftItems>
                <HeaderRightItems>
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
                                            <Dropdown>
                                                <p>
                                                    Welcome! {user.email}
                                                    <span className="chevron bottom"></span>
                                                </p>
                                                <div className={'body'}>
                                                    <ul>
                                                        <li>
                                                            <Link href={'/profile'}>Profile</Link>
                                                        </li>
                                                        <li>
                                                            <button
                                                                className={'btn btn-primary'}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    logOut();
                                                                }}>
                                                                Logout
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Dropdown>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link href={'/login'}>Login</Link>
                                        </li>
                                        <li>
                                            <Link href={'/signup'}>Sign Up</Link>
                                        </li>
                                    </>
                                )
                            }
                        </UserConsumer>
                    </ul>
                </HeaderRightItems>
            </HeaderInner>
        </div>
    );
}

export default Header;
