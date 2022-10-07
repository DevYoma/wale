import React, { useState } from 'react'
import './TweetBox.css';
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon
} from '@heroicons/react/outline'

import Yoma from '../../assets/yoma.jpg'

const TweetBox = () => {
    const [text, setText] = useState("");

    const handleTweet = () => {
        alert(`Working 🚀 ${text}`)
    }

  return (
    <div className="tweetBox">
        <div>
            <img 
                src={Yoma} 
                alt="twitterUser" 
            />
        </div>

        <div>
            <input 
                type="text" 
                placeholder="What's Happening?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <div className="tweetBox__actions">
                <PhotographIcon className='tweetBox__actionIcon'/>
                <SearchCircleIcon className='tweetBox__actionIcon'/>
                <EmojiHappyIcon className='tweetBox__actionIcon'/>
                <CalendarIcon className='tweetBox__actionIcon'/>
                <LocationMarkerIcon className='tweetBox__actionIcon'/>

                <button
                    onClick={handleTweet}
                    disabled={text.length === 0}
                    className="tweetBox__button"
                >
                    Tweet
                </button>
            </div>
        </div>
    </div>
  )
}

export default TweetBox