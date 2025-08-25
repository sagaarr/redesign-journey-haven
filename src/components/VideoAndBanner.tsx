import React from 'react'
import PropTypes from 'prop-types'
import LEDBanner from './LEDBanner'

const VideoAndBanner: React.FC = (props) => {

    const ledMessages = [
        "While walking on the road or footpath, ensure that children walk on the inner side.",
        "Women walking on the right side should stay alert and keep an eye on oncoming vehicles to prevent incidents like chain snatching.",
        "While crossing the road, stay focused on the traffic - avoid using mobile phones.",
        "Do not walk in groups or engage in conversations while walking on the road or footpath."
    ];


    return (
        <section id='video-banner' className="pt-20 bg-card/30">
            <div className="mb-12 max-w-4xl mx-auto">
                <LEDBanner
                    messages={ledMessages}
                    className="shadow-lg shadow-primary/20"
                />
            </div>

            <div className="mb-12 max-w-5xl mx-auto">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg border border-white/10">
                    <video
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover">
                        <source src="/videos/Statistic_video_F.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>
            </div>
        </section>
    )
}


export default VideoAndBanner
