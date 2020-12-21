import MainLayout from '../components/MainLayout';
import { gql, useQuery } from '@apollo/client';
const GET_USER_PROFILE_QUERY = gql`
    query GET_USER_PROFILE {
        profile(id: "5fe0d3b5fcebe16d4e455859") {
            gender
            address
            country
            phoneNumber
            user {
                id
                username
            }
        }
    }
`;
// export async function getServerSideProps(context) {

//     return {
//         props: {} // will be passed to the page component as props
//     };
// }
const Index = () => {
    const { data } = useQuery(GET_USER_PROFILE_QUERY);
    data && console.log(data);
    return (
        <MainLayout>
            <div className={'container'}>
                <h1 className={'primary'}>Home Page</h1>
            </div>
        </MainLayout>
    );
};

export default Index;
