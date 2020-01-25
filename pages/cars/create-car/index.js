import Layout from '../../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import ApiBasicUrl from '../../../configuration/model/apiSettings';
import DropDown from '../../../components/DropDown';
import InputBox from '../../../components/InputBox';
import '../../../styles/CarCreator.scss';
import { useState } from 'react';

const CreateCar = (props) => {
    const [car, setCar] = useState({
        vin: '',
        manufacturer: '',
        model: '',
        mileage: '',
        color: '',
        originCountry: '',
        amountDoors: '',
        amountSeats: '',
        driveType: '',
        gearBox: '',
        type: '',
        engine: null,
        categoryId: '',
        pictureName:'',
        id:'7a47391e-8aa9-4b93-bbdf-238373e7c603',
        catalogId: '',
    })
    const handleChange = async (name, value) => {

        if(name === 'engine')
        {
            const engineResponse = await fetch(ApiBasicUrl().concat(`/engine/details/${value}`));
            const engineData = await engineResponse.json();

            setCar({...car, engine: engineData});
            return;
        }

        setCar({ ...car, [name]: value})
    };
    const handleSubmit = async e => {
        e.preventDefault();
        const res = JSON.stringify(car)
        console.log(res);

        const resp = await fetch(ApiBasicUrl().concat('/car'), {
            method: 'POST',
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const json = await resp.json();
    }
    return(
        <Layout title="Car Creator">
            <div className="form-wrapper">
                <div className="form-content">
                    <div className="form-section">
                        {props.formMainSection.map((object) => <InputBox name={object.key} 
                                                                        labelValue={object.labelValue} handleChange={handleChange}/>)}
                        <DropDown title="Select Engine" list={props.dropList} details={props.details} showDetails={true} handleChange={handleChange} name="engine"/>
                        <DropDown title="Select Gearbox" list={props.gearBox} showDetails={false} handleChange={handleChange} name="gearBox"/>
                        <DropDown title="Select Category" list={props.category} showDetails={false} handleChange={handleChange} name="categoryId" />
                    </div>
                    <div className="form-section">
                        {props.formOtherSection.map((object, index) => <InputBox name={object.key} 
                                                                        labelValue={object.labelValue} handleChange={handleChange}/>)}
                        <DropDown title="Select Drive Type" list={props.driveType} showDetails={false} handleChange={handleChange} name="driveType"/>
                        <DropDown title="Select Car Type" list={props.carType} showDetails={false} handleChange={handleChange} name="type"/>
                    </div>
                </div>
                <button className="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </Layout>
    )
}

//TODO REFACTOR
CreateCar.getInitialProps = async () =>{
    const res = await fetch(ApiBasicUrl().concat('/engine'));
    const catResp = await fetch(ApiBasicUrl().concat('/category'));

    const data = await res.json();
    const catData = await catResp.json();
    
    const dropDownProvider = new Array();
    const detailsProvider = new Array();
    const categoryDropDownProvider = new Array();
    const formValues = [
        {
            key: "vin",
            labelValue: "Vin"
        },
        {
            key: "manufacturer",
            labelValue: "Manufacturer"
        },
        {
            key: "model",
            labelValue: "Model"
        },
        {
            key: "mileage",
            labelValue: "Mileage"
        }]
    const formOtherValues = [
        {
            key: 'color',
            labelValue: 'Color'
        },
        {
            key: "originCountry",
            labelValue: 'Origin Country'
        },
        {
            key: "amountDoors",
            labelValue: "Amount Doors"
        },
        {
            key: "amountSeats",
            labelValue: "Amount Seats"
        }
    ]
    data.forEach(element => {
        const object = {
            id: element.id,
            key: element.id,
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

    catData.forEach(element => {
        const category = {
            id: element.id,
            key: element.id,
            title: element.name
        }

        categoryDropDownProvider.push(category);
    })
    const driveType = [
        {
            id: 0,
            key: "FrontWheel",
            title: "Front Wheel"
        },
        {
            id: 1,
            key: "RearWheel",
            title: "Rear Wheel"
        },
        {
            id: 2,
            key: "AllWheel",
            title: "All Wheel"
        },
        {
            id: 3,
            key: "FourWheel",
            title: "Four Wheel"
        }
    ]
    const gearBox = [
        {
            id: 0,
            key: "Manual",
            title: "Manual"
        },
        {
            id: 1,
            key: "Automatic",
            title: "Automatic"
        },
        {
            id: 2,
            key: "SemiAutomatic",
            title: "Semi Automatic"
        },
        {
            id: 3,
            key: "Stepless",
            title: "Stepless"
        },
    ]

    const carType = [
        {
            id: 0,
            key: "Hatchback",
            title: "Hatchback"
        },
        {
            id: 1,
            key: "Sedan",
            title: "Sedan"
        },
        {
            id: 2,
            key: "Combi",
            title: "Combi"
        },
        {
            id: 3,
            key: "SUV",
            title: "Cabriolet"
        },
        {
            id: 4,
            key: "Coupe",
            title: "Coupe"
        }
    ]
    return{
        dropList: dropDownProvider,
        details: detailsProvider,
        formMainSection: formValues,
        formOtherSection: formOtherValues,
        driveType: driveType,
        gearBox: gearBox,
        carType: carType,
        category: categoryDropDownProvider
    };
};

export default CreateCar;