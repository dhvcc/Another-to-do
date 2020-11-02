import React, {Component} from 'react';
import ListElement from "./ListElement";

class ListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "items": [
                {
                    "check": false,
                    "text": "textu",
                },
                {
                    "check": true,
                    "text": "textu 2",
                }
            ]
        }
    }

    render() {
        const {items} = this.state;

        return (
            <ul className={'list-group'}>
                {items.map((item) => {
                    return <ListElement check={item.check} text={item.text}/>
                })}
            </ul>
        );
    }
}

export default ListContainer;