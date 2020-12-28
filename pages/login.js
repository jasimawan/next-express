import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import MainLayout from '../components/MainLayout';
import { userContext } from '../contexts/UserContext';
const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, logIn } = useContext(userContext);
    useEffect(() => {
        if (user) router.push('/');
    }, [user]);
    const handleLogin = (e) => {
        e.preventDefault();
        const data = { email: 'ABC', id: 1, username: 'abc' };
        logIn(data);
        localStorage.setItem('user', JSON.stringify(data));
    };
    return (
        <MainLayout>
            <div className={'auth-wrapper'}>
                <form className={'auth-form'} onSubmit={handleLogin}>
                    <div className={'form-group'}>
                        <input
                            type={'text'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={'form-control'}
                            autoComplete={'email'}
                            placeholder={'Email address'}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input
                            type={'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={'form-control'}
                            autoComplete={'current-password'}
                            placeholder={'Password'}
                        />
                    </div>
                    <div className={'form-group'}>
                        <Link href={'/signup'}>
                            Not registered yet? Click here
                        </Link>
                    </div>
                    <div className={'form-group'}>
                        <input
                            type={'submit'}
                            value={'Login'}
                            className={
                                'btn btn-primary btn-success btn-max-width'
                            }
                        />
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

export default Login;
