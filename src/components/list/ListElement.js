import React, {Component} from 'react';

class ListElement extends Component {
    constructor(props) {
        super(props);

        this.updateHandler = this.props.updateHandler
        this.index = this.props.index
    }


    updateCheckBox = (event) => {
        this.updateHandler(this.props.text, event.target.checked, this.index)
    }

    updateTaskText = (event) => {
        this.updateHandler(event.target.value, this.props.check, this.index)
    }

    render() {
        const {check, text} = this.props
        const muted = check ? "text-muted" : ""

        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" onChange={this.updateCheckBox} checked={check}/>
                    </div>
                </div>
                <input type="text" onChange={this.updateTaskText} value={text} className={"form-control " + muted}/>
            </div>
        );

    }
}

export default ListElement;