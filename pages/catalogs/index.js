
import Layout from '../../components/MyLayout';
import CatalogList from '../../components/Lists/CatalogList';
import ApiBasicUrl from '../../configuration/model/apiSettings';

const Catalogs = (props) => {
    return (
    <Layout title="Catalogs">
      <CatalogList catalogs={props.objects}/>
    </Layout>
    )
}

Catalogs.getInitialProps = async () => {
    const res = await fetch(ApiBasicUrl().concat('/catalog'));
    const data = await res.json();
    console.log(data);
    return {
      objects: data
  };
};

export default Catalogs;