import React, { useState } from 'react'
import './TweetBox.css';
import Avatar from '../../assets/emptyAvatar.jpg';
import Yoma from '../../assets/yoma.jpg';
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon
} from '@heroicons/react/outline'

const TweetBox = () => {
    const [tweetInput, setTweetInput] = useState('')
  return (
    <div className='tweetBox'>
        <div>
            <img src={Yoma} alt="avatar" style={{ height: "60px", width: "60px"}}/>
        </div>

        <div>
            <input 
                type="text" 
                placeholder="What's Happening?"
                value={tweetInput}
                onChange={(e) => setTweetInput(e.target.value)}
            />

            <div className="tweetBox__actions">
                <PhotographIcon  className="tweetBox__actionIcon"/>
                <SearchCircleIcon className="tweetBox__actionIcon" />
                <EmojiHappyIcon className="tweetBox__actionIcon" />
                <CalendarIcon className="tweetBox__actionIcon" />
                <LocationMarkerIcon className="tweetBox__actionIcon" />

                <button 
                    disabled={tweetInput.length === 0}
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