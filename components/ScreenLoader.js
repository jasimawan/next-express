import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
const ScreenLoader = () => {
    return (
        <div>
            <Loader
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                type="Watch"
                color="#00BFFF"
                height={60}
                width={60}
            />
        </div>
    );
};
export default ScreenLoader;
