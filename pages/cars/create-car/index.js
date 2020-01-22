import Layout from '../../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import ApiBasicUrl from '../../../configuration/model/apiSettings';
import DropDown from '../../../components/DropDown';

const CreateCar = (props) => {
    return(
        <Layout title="Car Creator">
            <DropDown title="Select Engine" list={props.dropList}/>
        </Layout>
    )
}

CreateCar.getInitialProps = async () =>{
    const res = await fetch(ApiBasicUrl().concat('/engine'));
    const data = await res.json();
    console.log(data.array);
    var dropDownProvider = new Array();
    data.forEach(element => {
        var object = {
            id: element.id,
            title: `${element.code}`
        }

        dropDownProvider.push(object);
    });

    return{
        dropList: dropDownProvider
    };
};

export default CreateCar;