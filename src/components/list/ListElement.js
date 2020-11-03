import React, {Component} from 'react';


class ListElement extends Component {
    constructor(props) {
        super(props);

        this.updateHandler = this.props.updateHandler
        this.deleteHandler = this.props.deleteHandler
        this.index = this.props.index
    }


    updateCheckBox = (event) => {
        this.updateHandler(this.props.text, event.target.checked, this.index)
    }

    updateTaskText = (event) => {
        if (!this.props.check)
            this.updateHandler(event.target.value, this.props.check, this.index)
    }

    render() {
        const {check, text} = this.props
        let muted, append;
        if (check) {
            muted = "text-muted"
            append = <div className="input-group-append">
                <span className="input-group-text bg-secondary">
                    <span className="fa fa-times-circle delete-item"
                          onClick={() => this.deleteHandler(this.props.index)}>
                    </span>
                </span>
            </div>
        } else {
            muted = ""
            append = ""
        }

        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" onChange={this.updateCheckBox} checked={check}/>
                    </div>
                </div>
                <input type="text" onChange={this.updateTaskText} readOnly={check} value={text}
                       className={"form-control " + muted}/>
                {append}
            </div>
        );

    }
}

export default ListElement;