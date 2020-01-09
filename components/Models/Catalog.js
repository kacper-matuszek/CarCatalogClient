
import Link from 'next/link'
import CarListLink from './Link';

const Catalog = (props) => {
    return (
        <div>
            <CarListLink catalog={props.catalog.id}>
                    <label>{props.catalog.name}</label>
                    <img src="../../static/images/26227.jpg"/>
                    <div className="details">
                        <div className="catalogDetails">
                            <div>Created date: </div>
                            <div>{props.catalog.createdDate}</div>
                        </div>
                        <div className="userDetails">
                            <img src={props.catalog.user.avatar} />
                            <label>{props.catalog.user.userName}</label>
                        </div>
                    </div>
            </CarListLink>
        </div>
    )
}

export default Catalog;