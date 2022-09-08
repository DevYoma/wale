import React from 'react'
import './Sidebar.css';
import {
    HomeIcon,
    HashtagIcon,
    BellIcon,
    MailIcon,
    BookmarkIcon,
    CollectionIcon,
    UserIcon,
    DotsCircleHorizontalIcon
} from '@heroicons/react/outline'
import SidebarRow from '../SidebarRow/SidebarRow';
import TwitterLogo from '../../assets/twitter.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__header">
          <img src={TwitterLogo} alt="twitterLogo" style={{ height: "40px", width: "40px", objectFit: "contain"}}/>
        </div>

        <SidebarRow title="Home" Icon={HomeIcon}/>
        <SidebarRow title="Explore" Icon={HashtagIcon}/>
        <SidebarRow title="Notifications" Icon={BellIcon}/>
        <SidebarRow title="Messages" Icon={MailIcon}/>
        <SidebarRow title="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarRow title="Lists" Icon={CollectionIcon}/>
        <SidebarRow title="Signout" Icon={UserIcon}/>
        <SidebarRow title="More" Icon={DotsCircleHorizontalIcon}/>
    </div>
  )
}

export default Sidebar