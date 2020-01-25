import React from 'react';
import onClickOutside from 'react-onclickoutside';
import FontAwesome from 'react-fontawesome';
import '../styles/DropDown.scss';
import MessageOnHover from './Helpers/MessageOnHover';

class DropDown extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            listOpen: false,
            headerTitle: this.props.title,
            allDetails: this.props.details,
            details: new Array(),
            renderMessage: false,
            selectedValue: null
        }
    }
    handleClickOutSide() {
        this.setState({
            listOpen: false
        });
    }
    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }));
    }

    toggleMessage() {
        this.setState(prevState => ({
            renderMessage: !prevState.renderMessage,
        }));
    }
    selectedItem(name, key) {
        this.setState({
            headerTitle: name,
            selectedValue: key,
            renderMessage: false
        });
        this.props.handleChange(this.props.name, key);
        this.handleClickOutSide();
    }

    onBeforeRenderMessage(id) {

        if(this.state.allDetails === undefined)
        {  return; }

        this.setState({
            details: this.state.allDetails.filter(x => x.id == id)
        })

        this.toggleMessage();
        this.render();
    }

    render() {
        const{list, showDetails} = this.props;
        const{listOpen, headerTitle, renderMessage, headerKey} = this.state;

        return(
        <div className="dd-wrapper">
            <div className="dd-header" onClick={() => this.toggleList()}>
                <div className="dd-header-title">{headerTitle}</div>
                {listOpen ? 
                <FontAwesome name="angle-up" className="angle" size="2x"/> : 
                <FontAwesome name="angle-down" className="angle" size="2x"/>}
            </div>
            {listOpen && <ul className="dd-list">
                {list.map((item) =>(
                    <li className="dd-list-item" key={item.id} 
                        onClick={() => this.selectedItem(item.title, item.key)}
                        onMouseOver={() => this.onBeforeRenderMessage(item.id)}
                        onMouseOut={() => this.toggleMessage()}
                        >{item.title}</li>
                ))}
            </ul>}
            {renderMessage && showDetails &&
                <MessageOnHover /*onRef={ref => (this.child = ref)} delay={500}*/ content={this.state.details} />   
            }
        </div>)
    };
}

const clickOutsideConfig = {
    handleClickOutSide: () => DropDown.handleClickOutSide
}

export default onClickOutside(DropDown, clickOutsideConfig);