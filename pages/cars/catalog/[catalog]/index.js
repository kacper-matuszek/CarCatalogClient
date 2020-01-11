import fetch from 'isomorphic-unfetch';
import Layout from '../../../../components/MyLayout';
import CarList from '../../../../components/Lists/CarList';
import ApiBasicUrl from '../../../../configuration/model/apiSettings';

const CarsInCatalog = (props) => {
    return (
        <Layout title="Cars">
            <CarList cars={props.cars} />
        </Layout>
    )
}

CarsInCatalog.getInitialProps = async (context) => {
    const res = await fetch(ApiBasicUrl().concat(`/car/catalog/${context.query.catalog}`));
    const data = await res.json();

    return {
        cars: data
    };
};

export default CarsInCatalog;