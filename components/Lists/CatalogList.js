import '../../styles/list/Catalog.scss';
import Catalog from '../Models/Catalog'

const CatalogList = (props) => {
    return (
        <div className="VerticalContent">
            {props.catalogs.map((catalog, index) => <Catalog catalog={catalog} key={index}/>)}
        </div>
    )
}

export default CatalogList;