import React, { Component } from 'react';

class BrightcoveVideoPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.state.initShow = this.build_player(this.props.data);
        console.log(this.props);
    }
        build_player = (video_ref) => {

        if (!video_ref) {
            return null;
        }

        let thePlayer, thePlayerCon, script;

        let video_id = 'ref:' + video_ref;

        let playerData = {
            'accountId': '1551111274001',
            'playerId': 'HyTTuAEsW', // shows black screen no commercials
            //'playerId': 'Bk45pkWP',         // works no commercials
            'videoId': video_id
        };

        let videoPlayer_id = 'gal_vid_' + video_ref;
        // dynamically build the player video element
        thePlayer = document.createElement('video');

        this.setState({
            id: videoPlayer_id,
            preload: 'auto',
            length: 0,
            video_id: playerData.videoId,
            account: playerData.accountId,
            player: playerData.playerId,
            embed: 'default',
            className: 'inner-video video-js',

            // controls: 'false',

            nativeControlForTouch: ''
        });

        // add and execute the player script tag
        script = document.createElement('script');
        script.src = '//players.brightcove.net/' + playerData.accountId + '/' + playerData.playerId + '_default/index.min.js';
        document.body.appendChild(script);

        script.onload = function () {
            let videojs = window.videojs;
            if(typeof(videojs) !== "undefined"){
                videojs(this).ready(function () {
                    let myPlayer = this;
                    myPlayer.play();
                });
            }
        }.bind(videoPlayer_id);

    }; // end of build_player
    render() {
        return (
            <div className="pop-up-inner video-mod brightcove-holder brv-player-placeholder">
                <video src={this.state.src}
                       id={this.state.id}
                       preload={this.state.preload}
                       data-length={this.state.length}
                       data-video-id={this.state.video_id}
                       data-account={this.state.account}
                       className={this.state.className}
                       data-player={this.state.player}
                       data-embed={this.state.embed}
                       controls={this.state.controls}
                       //nativeControlForTouch={this.state.nativeControlForTouch}
                />
            </div>
        )
    }
}
export default BrightcoveVideoPlayer;
