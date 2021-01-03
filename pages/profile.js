import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import MainLayout from '../components/MainLayout';
import { userContext } from '../contexts/UserContext';

const Profile = () => {
    const { user } = useContext(userContext);
    const router = useRouter();
    useEffect(() => {
        if (!user) router.push('/login');
    }, [user]);
    return (
        <MainLayout>
            <Container>
                <h1>Profile Page</h1>
            </Container>
        </MainLayout>
    );
};

export default Profile;
