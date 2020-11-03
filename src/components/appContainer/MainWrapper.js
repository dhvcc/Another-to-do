import React, {Component} from 'react';
import MainContainer from "./MainContainer";

class MainWrapper extends Component {
    render() {
        return (
            <div className={'container-xl'}>
                <div className="row justify-content-center py-5">
                    <MainContainer/>
                </div>
            </div>
        );
    }
}

export default MainWrapper;