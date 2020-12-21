import { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '../components/AuthLayout';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    return (
        <AuthLayout>
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
        </AuthLayout>
    );
};

export default Signup;
