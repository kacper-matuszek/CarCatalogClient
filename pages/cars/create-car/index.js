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

    const dropDownProvider = new Array();
    const detailsProvider = new Array();

    data.forEach(element => {
        const object = {
            id: element.id,
            title: `Code: ${element.code}  ${element.horsePower} KM`
        }

        dropDownProvider.push(object);

        const fuelDetail = {
            id: element.id,
            key: "Fuel",
            value: element.fuel
        };

        const capacityDetail = {
            id: element.id,
            key: "Capacity",
            value: `${parseFloat(element.capacity).toFixed(2)} cm3`
        };

        const cylinderDetail = {
            id: element.id,
            key: "Amount Cylinders",
            value: element.amountCylinders
        };

        const turboDetail = {
            id: element.id,
            key: "Turbo",
            value: element.turbo //TODO: add emoji check
        };
        detailsProvider.push(fuelDetail);
        detailsProvider.push(capacityDetail);
        detailsProvider.push(cylinderDetail);
        detailsProvider.push(turboDetail);
    });

    return{
        dropList: dropDownProvider,
        details: detailsProvider
    };
};

export default CreateCar;