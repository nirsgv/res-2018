import React, {Component} from 'react';

import Li from './Li';
import Ul from './Ul';
import Wrapper from './Wrapper';

class List extends Component {
    constructor(props) {
        super(props);
        a: 2;
    }
    render() {
        const childItems = this.props.children.map((item, index, array) => {
            return (
                <Li key={index}
                    className={`item ${index}`}
                >
                    {item}
                </Li>
            )
        });
        return (
            <Wrapper className={this.props.wrp_class_name}>
                <Ul className={this.props.element_class_name}>
                    {childItems}
                </Ul>
            </Wrapper>
        )
    }
}
export default List;
