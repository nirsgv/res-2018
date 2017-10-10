import React, { Component } from 'react';


class OpeninScreen extends Component {
    closeOpenerPre = e => (
        this.props.closeOpener()
    );
    render() {
        return(
            <section className={`opening-screen fading-anima`} onAnimationEnd={this.closeOpenerPre}>
                <div className="hero zooming-anima"></div>
            </section>
        )
    }
}



export default OpeninScreen;


