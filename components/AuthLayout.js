const AuthLayout = ({ children }) => {
    return (
        <div className={'app-wrapper'}>
            <main>{children}</main>
        </div>
    );
};

export default AuthLayout;
