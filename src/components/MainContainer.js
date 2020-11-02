import React, {Component} from 'react';
import CenteredContainer from "./CenteredContainer";

class MainContainer extends Component {
    render() {
        return (
            <div className={'container container-fluid justify-content-center'}>
                <CenteredContainer/>
            </div>
        );
    }
}

export default MainContainer;