import React from 'react'
import './TweetHeader.css';
import { RefreshIcon } from '@heroicons/react/outline';

const TweetHeader = () => {
  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <div className="tweetHeader">
        <h2>Home</h2>

        <RefreshIcon className='tweetHeader__icon' onClick={reloadPage}/>
    </div>
  )
}

export default TweetHeader