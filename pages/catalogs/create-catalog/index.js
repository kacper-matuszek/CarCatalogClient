import Layout from '../../../components/MyLayout';
import CarList from '../../../components/Lists/CarList';
import fetch from 'isomorphic-unfetch';
import ApiBasicUrl from '../../../configuration/model/apiSettings';
import InputBox from '../../../components/InputBox';


const CreateCatalog = props => {
    return (
        <Layout title="Catalog Creator">
            <div className="container">
                {props.formInputs.map((obj) => <InputBox key={obj.key} labelValue={obj.value} />)}
            </div>
            <CarList cars={props.cars} />

            <style jsx>{`
        .container {
            position: relative;
            display: flex;
            flex-flow: row;
            justify-content: space-around;
            align-items: center;
            margin-right: 1em;
            margin-left: 1em;
            padding: .5em;
            width: 100%;
        }
        `}</style>
        </Layout>
    )
}

CreateCatalog.getInitialProps = async () => {
    const res = await fetch(ApiBasicUrl().concat('/car'));
    const data = await res.json();
    const formInputs = [
        {
            key: 'catalog',
            value: 'Catalog Name'
        },
        {
            key: 'user',
            value: 'Your Nickname'
        }
    ]
    return {
      cars: data,
      formInputs: formInputs
    };
};

export default CreateCatalog;