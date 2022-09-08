import React from 'react'
import FeedHome from '../FeedHome/FeedHome'
import Tweet from '../Tweet/Tweet'
import TweetBox from '../TweetBox/TweetBox'
import './Feed.css'

const Feed = () => {
  return (
    <div className='feed'>
        <FeedHome />
        <TweetBox />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
    </div>
  )
}

export default Feed