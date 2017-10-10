import React from 'react'
import BrightcoveVideoPlayer from './BrightcoveVideoPlayer';

export default (props) => (
    <section className="schedule-video-tab">
        <BrightcoveVideoPlayer data={props.data.schedules_presented_video} />
    </section>
)