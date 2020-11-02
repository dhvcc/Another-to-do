import React, {Component} from 'react';

class ListElement extends Component {
    render() {
        const {check, text} = this.props;

        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" value={check} checked={check}/>
                    </div>
                </div>
                <input type="text" value={text} className="form-control" aria-label="Text input with checkbox"/>
            </div>
        );

    }
}

export default ListElement;