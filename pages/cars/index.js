import Layout from '../../components/MyLayout';
import CarList from '../../components/Lists/CarList';
import ApiBasicUrl from '../../configuration/model/apiSettings';
import fetch from 'isomorphic-unfetch'
import Car from '../../components/Models/Car';

const Cars = (props) => {
    return (
        <Layout title="Cars">
            <CarList cars={props.objects} />
        </Layout>
    )
}

Cars.getInitialProps = async () => {
    const res = await fetch(ApiBasicUrl().concat('/car'));
    const data = await res.json();
    console.log(data);
    return {
      objects: data
    };
  };

  export default Cars;