import { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from '../components/MainLayout';
import { userContext } from '../contexts/UserContext';
import { gql, useMutation } from '@apollo/client';

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_USER(
        $email: String!
        $password: String!
        $username: String!
    ) {
        signUp(email: $email, password: $password, username: $username) {
            token
        }
    }
`;

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const router = useRouter();
    const { user } = useContext(userContext);
    const [signUp] = useMutation(SIGNUP_MUTATION);
    if (user) router.push('/');

    const handleSignUp = (e) => {
        e.preventDefault();
        signUp({
            variables: {
                email,
                password,
                username
            }
        })
            .then((data) => console.log(data))
            .catch((err) => console.log(err.message));
    };

    return (
        <MainLayout>
            <div className={'container'}>
                <div className={'auth-wrapper'}>
                    <form className={'auth-form'} onSubmit={handleSignUp}>
                        <div className={'form-group'}>
                            <input
                                type={'text'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={'form-control'}
                                placeholder={'Email address'}
                            />
                        </div>
                        <div className={'form-group'}>
                            <input
                                type={'text'}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={'form-control'}
                                placeholder={'Username'}
                            />
                        </div>
                        <div className={'form-group'}>
                            <input
                                type={'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={'form-control'}
                                placeholder={'Password'}
                            />
                        </div>
                        <div className={'form-group'}>
                            <Link href={'/login'}>
                                Already registered? Click here
                            </Link>
                        </div>
                        <div className={'form-group'}>
                            <input
                                type={'submit'}
                                value={'Signup'}
                                className={
                                    'btn btn-primary btn-success btn-max-width'
                                }
                            />
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default Signup;
