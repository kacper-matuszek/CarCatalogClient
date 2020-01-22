/*<div className="dd-wrapper">
  <div className="dd-header">
    <div className="dd-header-title"></div>
  </div>
  <ul className="dd-list">
    <li className="dd-list-item"></li>
    <li className="dd-list-item"></li>
    <li className="dd-list-item"></li>
  </ul>
</div>*/
import React, {Component} from 'react';

class DropDown extends Component {
    constructor(props){
        super(prosp)

        this.state = {
            listOpen: false,
            headerTitle: this.props.title
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
    return() {
        const{list} = this.props;
        const{listOpen, headerTitle} = this.state;
        
        this.return(
        <div className="dd-wrapper">
            <div className="dd-header" onClick={() => this.toggleList()}>
                <div className="dd-header-title">{headerTitle}</div>
            </div>
            {listOpen && <ul className="dd-list">
                {list.map((item) =>(
                    <li className="dd-list-item" key={item.id}>{item.title}</li>
                ))}
            </ul>}
        </div>)
    };
}