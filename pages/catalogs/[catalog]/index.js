import fetch from 'isomorphic-unfetch';
import Layout from '../../../components/MyLayout';
import CarList from '../../../components/Lists/CarList';
import ApiBasicUrl from '../../../configuration/model/apiSettings';
import { useRouter } from 'next/router';

const CarsInCatalog = (props) => {
    const router = useRouter();
   
    return (
        <Layout title={`${router.query.catalog} catalog`}>
            <CarList cars={props.cars} />
        </Layout>
    );
}

CarsInCatalog.getInitialProps = async (context) => {
    const res = await fetch(ApiBasicUrl().concat(`/car/catalog/${context.query.catalogId}`));
    const data = await res.json();

    return {
        cars: data
    };
};
export default CarsInCatalog;