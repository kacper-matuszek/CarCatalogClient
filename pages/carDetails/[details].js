import Layout from "../../components/MyLayout"
import CarDetails from "../../components/Models/Details/CarDetails"
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'
import ApiBasicUrl from '../../configuration/model/apiSettings';




const Details = (props) => {
    return (
        <Layout title="Car Details">
            <CarDetails car={props.car} />
        </Layout>
    )
}

Details.getInitialProps = async (context) => {
    const res = await fetch(ApiBasicUrl().concat(`/car/details/${context.query.details}`));
    const data = await res.json();

    return {
        car: data
    };
};

export default Details;