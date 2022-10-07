import React from 'react'
import Tweet from '../Tweet/Tweet'
import TweetBox from '../TweetBox/TweetBox'
import TweetHeader from '../TweetHeader/TweetHeader'
import './Feed.css'
import Gaara from '../../assets/gaara.jpg';
import Jiraiya from '../../assets/jiraiya.jpg';
import Kakashi from '../../assets/kakashi.jpg';
import Naruto from '../../assets/naruto.jfif'

const Feed = () => {
  return (
    <div className='feed'>
      {/* TweetHeader */}
      <TweetHeader />

      {/* TweetBox */}
      <TweetBox />

      {/* Tweet */}
      <Tweet image={Gaara}/>
      <Tweet image={Jiraiya}/>
      <Tweet image={Kakashi}/>
      <Tweet image={Naruto}/>
      
    </div>
  )
}

export default Feed