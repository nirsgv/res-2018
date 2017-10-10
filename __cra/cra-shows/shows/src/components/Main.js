import Items from './Items';
import React, { Component } from 'react';
import ScheduleVideoTab from './ScheduleVideoTab';
import PropTypes from 'prop-types';



class Main extends Component {
    render() {
        let pageSwitcher = (this.props.data.selected_menu_item===0)
            ? <Items data={this.props.data}
                   openPopup={this.props.openPopup}
                   emptyCancelableTmpClass={this.props.emptyCancelableTmpClass}/>
            : <ScheduleVideoTab data={this.props.data}
                    openPopup={this.props.openPopup}
                    emptyCancelableTmpClass={this.props.emptyCancelableTmpClass}
        />;

        return (
            <main className="main">

                {pageSwitcher}

            </main>
        )
    }
}
export default Main;

Main.propTypes = {
    openPopup: PropTypes.func.isRequired,
    emptyCancelableTmpClass: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};