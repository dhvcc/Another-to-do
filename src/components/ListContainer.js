import React, {Component} from 'react';
import ListElement from "./ListElement";

class ListContainer extends Component {
    render() {
        return (
            <div>
                {/* List elements */}
                <ListElement/>
            </div>
        );
    }
}

export default ListContainer;