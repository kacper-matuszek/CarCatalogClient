import Layout from '../../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import ApiBasicUrl from '../../../configuration/model/apiSettings';
import DropDown from '../../../components/DropDown';

const CreateCar = (props) => {
    return(
        <Layout title="Car Creator">
            <DropDown title="Select Engine" list={props.dropList} details={props.details}/>
        </Layout>
    )
}

CreateCar.getInitialProps = async () =>{
    const res = await fetch(ApiBasicUrl().concat('/engine'));
    const data = await res.json();

    var dropDownProvider = new Array();
    var detailsProvider = new Array();

    data.forEach(element => {
        var object = {
            id: element.id,
            title: `${element.code}`
        }

        dropDownProvider.push(object);

        var fuelDetail = {
            key: "Fuel",
            value: element.fuel
        };

        var capacityDetail = {
            key: "Capacity",
            value: element.capacity
        };

        var cylinderDetail = {
            key: "Amount Cylinders",
            value: element.amountCylinders
        };
        detailsProvider.push(fuelDetail);
        detailsProvider.push(capacityDetail);
        detailsProvider.push(cylinderDetail);
    });

    return{
        dropList: dropDownProvider,
        details: detailsProvider
    };
};

export default CreateCar;