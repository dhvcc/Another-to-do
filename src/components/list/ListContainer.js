import React, {Component} from 'react';
import ListElement from "./ListElement";


class ListContainer extends Component {
    render() {
        const {items, handleUpdateItems, handleDeleteItem} = this.props;

        return (
            <ul className={'list-group'}> {
                items.map((item) => {
                    return <ListElement key={item.index} index={item.index} check={item.check} text={item.text}
                                        updateHandler={handleUpdateItems}
                                        deleteHandler={handleDeleteItem}
                    />
                })
            }
            </ul>
        );
    }
}

export default ListContainer;