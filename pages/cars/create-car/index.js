import Layout from '../../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import ApiBasicUrl from '../../../configuration/model/apiSettings';
import DropDown from '../../../components/DropDown';
import InputBox from '../../../components/InputBox';
import '../../../styles/CarCreator.scss';

const CreateCar = (props) => {
    return(
        <Layout title="Car Creator">
            <div className="form-wrapper">
                <div className="form-content">
                    <div className="form-section">
                        {props.formMainSection.map((object) => <InputBox key={object.key} 
                                                                        labelValue={object.labelValue} />)}
                    <DropDown title="Select Engine" list={props.dropList} details={props.details}/>
                    </div>
                    <div className="form-section">
                        {props.formOtherSection.map((object, index) => <InputBox key={object.key} 
                                                                        labelValue={object.labelValue}/>)}
                    </div>
                </div>
                <button className="submit">Submit</button>
            </div>
        </Layout>
    )
}

CreateCar.getInitialProps = async () =>{
    const res = await fetch(ApiBasicUrl().concat('/engine'));
    const data = await res.json();
    
    const dropDownProvider = new Array();
    const detailsProvider = new Array();
    const formValues = [
        {
            key: "vin",
            labelValue: "Vin"
        },
        {
            key: "manuf",
            labelValue: "Manufacturer"
        },
        {
            key: "mod",
            labelValue: "Model"
        },
        {
            key: "mil",
            labelValue: "Mileage"
        },
        {
            key: "driv",
            labelValue: "Drive Type"
        }]
    const formOtherValues = [
        {
            key: 'color',
            labelValue: 'Color'
        },
        {
            key: 'type',
            labelValue: 'Type'
        },
        {
            key: "country",
            labelValue: 'Origin Country'
        },
        {
            key: "amDoors",
            labelValue: "Amount Doors"
        },
        {
            key: "amSeats",
            labelValue: "Amount Seats"
        }
    ]
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
            value: element.turbo ? 'yes' : 'no' //TODO: add emoji check
        };
        detailsProvider.push(fuelDetail);
        detailsProvider.push(capacityDetail);
        detailsProvider.push(cylinderDetail);
        detailsProvider.push(turboDetail);
    });

    return{
        dropList: dropDownProvider,
        details: detailsProvider,
        formMainSection: formValues,
        formOtherSection: formOtherValues
    };
};

export default CreateCar;