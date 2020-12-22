import Link from 'next/link';
import { useState } from 'react';
import AuthLayout from '../components/AuthLayout';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <AuthLayout>
            <div className={'container-sm'}>
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
                                type={'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={'form-control'}
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
            </div>
        </AuthLayout>
    );
};

export default Login;
