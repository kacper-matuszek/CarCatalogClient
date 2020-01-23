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

    selectedItem(name) {
        this.setState({
            headerTitle: name,
        });

        this.handleClickOutSide();
    }

    onHoverItem() {
        this.refs.child.handleOnHover();
    }

    outHoverItem() {
        this.ref.child.handleOutHover();
    }
    render() {
        const{list, details} = this.props;
        const{listOpen, headerTitle} = this.state;
        
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
                        onClick={() => this.selectedItem(item.title)}
                        onMouseOver={() => this.onHoverItem()}
                        onMouseOut={() => this.outHoverItem()}
                        >{item.title}</li>
                ))}
            </ul>}
            <MessageOnHover ref="child" classToAdd="dd-list-item" delay={2000} content={details}/>
        </div>)
    };
}

const clickOutsideConfig = {
    handleClickOutSide: () => DropDown.handleClickOutSide
}

export default onClickOutside(DropDown, clickOutsideConfig);