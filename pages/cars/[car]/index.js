
import Layout from "../../../components/MyLayout";
import CarDetails from "../../../components/Models/Details/CarDetails";
import fetch from 'isomorphic-unfetch';
import ApiBasicUrl from '../../../configuration/model/apiSettings';

const CarProfile = (props) => {
    return (
        <Layout title="Car Details">
            <CarDetails car={props.car} />
        </Layout>
    );
}

CarProfile.getInitialProps = async (context) => {
    const res = await fetch(ApiBasicUrl().concat(`/car/details/${context.query.car}`));
    const data = await res.json();
    console.log(data);
    return {
        car: data
    };
};

export default CarProfile;