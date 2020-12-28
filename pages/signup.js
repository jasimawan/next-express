import { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from '../components/MainLayout';
import { userContext } from '../contexts/UserContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const router = useRouter();
    const { user } = useContext(userContext);
    if (user) router.push('/');
    return (
        <MainLayout>
            <div className={'container'}>
                <div className={'auth-wrapper'}>
                    <form className={'auth-form'}>
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
