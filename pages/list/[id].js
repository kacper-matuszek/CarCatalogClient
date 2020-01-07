import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import CarList from '../../components/Lists/CarList';
import ApiBasicUrl from '../../configuration/model/apiSettings';
import fetch from 'isomorphic-unfetch'
import CatalogList from '../../components/Lists/CatalogList';

const Post = (props) => {
  const router = useRouter();

  if(router.query.id === "car")
  {
    return (
      <Layout title="Cars">
      <CarList cars={props.objects}/>
    </Layout>
    )
  }

  return (
    <Layout title="Catalogs">
      <CatalogList catalogs={props.objects}/>
    </Layout>
  );
}

Post.getInitialProps = async (context) => {
  const res = await fetch(ApiBasicUrl().concat(`/${context.query.id}`));
  const data = await res.json();
  console.log(data);
  return {
    objects: data
  };
};

export default Post