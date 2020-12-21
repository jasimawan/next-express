import Header from './Header';

const MainLayout = ({ children }) => {
    return (
        <div className={'app-wrapper'}>
            <header>
                <Header />
            </header>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
