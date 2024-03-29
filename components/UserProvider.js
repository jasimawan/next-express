import { gql, useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { UserProvider } from '../contexts/UserContext';
import ScreenLoader from './ScreenLoader';

export const VERIFY_TOKEN_QUERY = gql`
    query VERIFY_TOKEN($token: String!) {
        verifyToken(token: $token) {
            id
            username
            email
        }
    }
`;

const _UserProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [getToken, { data }] = useLazyQuery(VERIFY_TOKEN_QUERY);
    const logOut = () => {
        localStorage.removeItem('token');
        setUser(null);
    };
    const logIn = (user) => {
        setUser(user);
    };
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getToken({ variables: { token } });
        } else {
            setLoading(false);
        }
        if (data) {
            const { verifyToken } = data;
            setUser(verifyToken);
            setLoading(false);
        }
    }, [data]);
    if (loading) return <ScreenLoader />;
    return (
        <UserProvider
            value={{
                logOut,
                logIn,
                user
            }}>
            {children}
        </UserProvider>
    );
};
export default _UserProvider;
