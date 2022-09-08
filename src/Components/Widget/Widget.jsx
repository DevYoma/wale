import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import './Widget.css'

const Widget = () => {
  return (
    <div className='widget'>
         <TwitterTimelineEmbed
            sourceType="profile"
            screenName="devyoma"
            options={{height: 1000}}
        />
    </div>
  )
}

export default Widget