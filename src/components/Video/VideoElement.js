import React, { Component } from 'react';

class VideoElement extends Component {
    constructor(props) {
        super(props);
    }


render() {
    return (
        <div className={`video-wrp`}>
            <video className="inner-video" autoPlay controls>
                <source src="http://techslides.com/demos/sample-videos/small.webm" type='video/webm' />
                <source src="http://techslides.com/demos/sample-videos/small.mp4" type='video/mp4' />
                </video>
        </div>
    );
}
}



export default VideoElement;