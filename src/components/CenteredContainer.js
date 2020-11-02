import React, {Component} from 'react';
import Heading from "./Heading";
import ListContainer from "./ListContainer";
import AddButton from "./AddButton";

class CenteredContainer extends Component {
    render() {
        return (
            <div className={'col-6'}>
                <Heading/>
                <ListContainer/>
                <AddButton/>
            </div>
        );
    }
}

export default CenteredContainer;