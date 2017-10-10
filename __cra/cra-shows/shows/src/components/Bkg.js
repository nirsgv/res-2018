import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Bkg extends Component {
    constructor(props) {
        super();
    }

    render() {
    //console.log(this.props.data.pop_up_visible);
    let onSwitch = this.props.data.pop_up_visible ? 'active' : 'deactive';

        return(
            <div className={`bkg ${onSwitch}`}>

            </div>
        )
    }
}
export default Bkg;

Bkg.propTypes = {
    className: PropTypes.func
};