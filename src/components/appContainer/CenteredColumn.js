import React, {Component} from 'react';
import TaskInput from "../controls/TaskInput";
import ListContainer from "../list/ListContainer";

class CenteredColumn extends Component {
    render() {
        return (
            <div className={'col-6'}>
                <h2>To-do</h2>
                <hr className={'mb-3'}/>
                <ListContainer/>
                <TaskInput/>
            </div>
        );
    }
}

export default CenteredColumn;