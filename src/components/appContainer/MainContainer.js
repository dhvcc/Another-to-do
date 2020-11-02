import React, {Component} from 'react';
import CenteredColumn from "./CenteredColumn";

class MainContainer extends Component {
    render() {
        return (
            <div className={'container-xl'}>
                <div className="row justify-content-center py-5">
                    <CenteredColumn/>
                </div>
            </div>
        );
    }
}

export default MainContainer;