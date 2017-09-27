import Items from './Items';
import React, { Component } from 'react';
import ScheduleVideoTab from './ScheduleVideoTab';



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