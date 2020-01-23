import React from 'react'

class MessageOnHover extends React.Component {
    constructor(props) {

        this.state = {
            classToAdd: props.classToAdd,
            hoveringClass: "onHover",
            delay: props.delay,
            timeoutId: null
        }

    }

    //Add to html object which contains class name: hoveringOnClass
    handleOnHover() {

        if(!timeoutId)
        {
            this.setState({
                timeoutId: window.setTimeout(() => {

                var hoveredObject = document.getElementsByClassName(hoveringClass)[0];
                hoveredObject.classList.add(classToAdd);
                this.setState({ timeoutId: null });

                }, delay)
            });
        }
    }

    //Add to html object which contains class name: hoveringOnClass
    handleOutHover() {
        if(timeoutId)
        { 
            window.clearTimeout(timeoutId);
            this.setState({ timeoutId: null });
        } 
        else 
        {
            var hoveredObject = document.getElementsByClassName(hoveringClass)[0];

            if(hoveredObject !== undefined)
            {
                hoveredObject.classList.remove(classToAdd);
            }
        }
    }

    render() {
        const{content} = this.props;

        return (
        <div className={`wrapper ${this.state.hoveringClass}`}>
            <div className="message">
                {content.map((item, key) => 
                    <React.Fragment>
                        <div className="content">
                            <div key={key}>{`${item.key}: `}</div>
                            <div key={`${key}val`}>{item.value}</div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </div>);
    }
}

export default MessageOnHover;