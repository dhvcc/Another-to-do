import React, {Component} from 'react';

class TaskInput extends Component {

    submitHandler = (event) => {
        const {handleUpdateItems} = this.props;
        const formData = new FormData(event.target);
        const input = document.getElementById('task-input');

        event.preventDefault();

        handleUpdateItems(formData.get('task'))
        input.value = ''
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="input-group mb-3">
                    <input type="text" id={'task-input'} className="form-control" name={'task'} placeholder="New task"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default TaskInput;