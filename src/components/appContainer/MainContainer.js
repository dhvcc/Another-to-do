import React, {Component} from 'react';
import TaskInput from "../controls/TaskInput";
import ListContainer from "../list/ListContainer";

class MainContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "counter": 0,
            "items": [],
        }
    }

    componentDidMount() {
        const data = localStorage.getItem("another-to-do")
        if (data !== null) {
            this.setState(JSON.parse(data))
        } else {
            localStorage.setItem("another-to-do", JSON.stringify(this.state))
        }
    }

    handleUpdateItems = (text, check = 'false', index = null) => {
        let newState = {...this.state};

        if (index === null) {
            index = newState.counter++;
            newState.items.push({
                "index": index,
                "text": text,
                "check": check === 'true'
            })
        } else {
            const item_ind = newState.items.findIndex((item) => item.index === index)
            newState.items[item_ind] = {
                "index": index,
                "text": text,
                "check": check
            }
        }

        localStorage.setItem("another-to-do", JSON.stringify(newState))

        this.setState(newState)
    }

    render() {
        return (
            <div className={'col-6'}>
                <h2>To-do</h2>
                <hr className={'mb-3'}/>
                <ListContainer items={this.state.items} handleUpdateItems={this.handleUpdateItems}/>
                <TaskInput handleUpdateItems={this.handleUpdateItems}/>
            </div>
        );
    }
}

export default MainContainer;