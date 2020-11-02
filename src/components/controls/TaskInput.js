import React, {Component} from 'react';

class TaskInput extends Component {

    submitHandler = (event) => {
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="New task"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default TaskInput;