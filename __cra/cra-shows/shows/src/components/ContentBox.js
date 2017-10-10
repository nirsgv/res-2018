import React, { Component } from 'react';
import BrightcoveVideoPlayer from './BrightcoveVideoPlayer';
import PropTypes from 'prop-types';

class ContentBox extends Component {
    constructor(props){
    super(props);
        this.state = {
            showItem: ''
        }
};
    componentDidMount(){
    }
render() {

    let dat = this.props.data;
    const vidImgSwitch = dat.pop_up_type;
    let innerClassSwitch = (vidImgSwitch==='video_box') ? 'video-mod' : 'image-mod';
    const elemSwitched = (vidImgSwitch==='video_box')
                       ?  <div className={`pop-up-inner ${innerClassSwitch}`}>

        <BrightcoveVideoPlayer data={dat.brightcove_ref} />

                          </div>
                       :  <div className={`pop-up-inner ${innerClassSwitch}`}>
                                <div className='img-holder'>
                                    <figure>
                                        <img src={dat.main_img} alt={dat.alt} 
                                    />
                                        <figcaption>{dat.label}</figcaption>
                                        <h4 className="paragraph">{dat.paragraph}</h4>
                                    </figure>
                                </div>
                          </div>;

    return (
        <div className="pop-up-content c-hack content-in-anima">
            {this.props.children}  {/*CloseBtn*/}
            <div className="show-indicators">
                <h3 className="label">{dat.label}</h3>
                <h3 className="day">{dat.day}</h3>
                <h3 className="hour">{dat.hour}</h3>
            </div>
            {elemSwitched}
        </div>
    );
}
}

export default ContentBox;

ContentBox.propTypes = {
    data: PropTypes.string
};