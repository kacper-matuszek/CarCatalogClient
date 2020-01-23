import React from 'react';
import '../../styles/helpers/HoverMessage.scss';

class MessageOnHover extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hoveringClass: null,
            delay: props.delay,
            timeoutId: null
        }

    }

   /* componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    //Add to html object which contains class name: hoveringOnClass
    async handleOnHover() {
        if(!this.state.timeoutId)
        {
            this.setState({
                timeoutId: window.setTimeout(() => {
                
                this.setState({ timeoutId: null });
                this.setState({ hoveringClass: "onHover"});
                var hoveredObject = document.getElementsByClassName('wrapper')[0];
                hoveredObject.classList.add(this.state.hoveringClass);

                }, this.state.delay)
            });
        }
    }

    //Add to html object which contains class name: hoveringOnClass
    async handleOutHover() {
        if(this.state.timeoutId)
        { 
            window.clearTimeout(this.state.timeoutId);
            this.setState({ timeoutId: null });
        } 
        else 
        {
            var hoveredObject = document.getElementsByClassName('wrapper')[0];
            if(hoveredObject != undefined)
            {
                hoveredObject.classList.remove(this.state.hoveringClass);
                this.setState({timeoutId: null});
            }
        }
    }*/

    render() {
        const{content} = this.props;
        
        return (
        <div className={`wrapper ${this.state.hoveringClass}`}>
            <div className="message">
                {content.map((item) => 
                    <React.Fragment>
                        <div className="content">
                            <div key={item.id}>{`${item.key}`} </div>
                            <div key={`${item.id}val`}>{`: ${item.value}`}</div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </div>);
    }
}

export default MessageOnHover;