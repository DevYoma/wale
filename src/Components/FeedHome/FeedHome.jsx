import { RefreshIcon } from '@heroicons/react/outline';
import React from 'react'
import './FeedHome.css';

const FeedHome = () => {
  return (
    <div className='feedHome'>
        <h2>Home</h2>

        <RefreshIcon className='feedHome__refreshIcon'/>
    </div>
  )
}

export default FeedHome