import React from 'react'
import './Tweet.css';
import {ChatAlt2Icon,
    HeartIcon,
    SwitchHorizontalIcon,
    UploadIcon,
} from '@heroicons/react/outline'
import Yoma from '../../assets/yoma.jpg';
import Kakashi from '../../assets/naruto.jfif'

const Tweet = () => {
  return (
    <div className="tweet">
        <div className="tweetHeader">
            <img src={Yoma} alt="yomaImg" />

            <div className="tweetHeader__details">
                <span>devyoma</span>
                <span>@devyoma . 2 days ago</span>

                <div className="tweetHeader__tweet">
                    <p>This is a DEMO tweet</p>
                </div>
            </div>
        </div>

        <div className="tweetPicture">
            <img src={Kakashi} alt="kakashi" />
        </div>

        <div className="tweetFooter">
            <div>
                <ChatAlt2Icon /><span>5</span>
            </div>
            <div>
                <HeartIcon />
            </div>
            <div>
                <SwitchHorizontalIcon />
            </div>
            <div>
                <UploadIcon />
            </div>
        </div>
    </div>
  )
}

export default Tweet