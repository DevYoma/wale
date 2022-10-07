import React from 'react'
import './Tweet.css';
import {
    ChatAlt2Icon, 
    HeartIcon,
    SwitchHorizontalIcon,
    UploadIcon
} from '@heroicons/react/outline'
import Naruto from '../../assets/naruto.jfif'
import Yoma from '../../assets/yoma.jpg'

const Tweet = (props) => {
    console.log(props)
  return (
    <div className="tweet">
        <div className="tweet__header">
            <img src={Yoma} alt="userImg" />

            <div className="tweetHeader__details">
                <span>devyoma</span>
                <span>@devyoma . 2 days ago</span>

                <div className="tweetHeader__tweet">
                    <p>This is a DEMO tweet</p>
                </div>
            </div>
        </div>

        <div className="tweetPicture">
            <img src={props.image} alt="naruto" />
        </div>

        <div className="tweetFooter">
            <div>
                <ChatAlt2Icon />
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