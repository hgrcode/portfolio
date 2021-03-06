import React from 'react';
import '../styles/timeline.css';
import timelineData from './timelinedata/data';
import TimelineItem from './timelineitem';


const Timeline = () => timelineData.length > 0 && (
    <div className='timeline-container'>
        {timelineData.map((data, idx)=>(
            <TimelineItem data={data} key={idx} />
        ))}
    </div>
);

export default Timeline;
