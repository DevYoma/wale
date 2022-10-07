import React from 'react'
import './Sidebar.css'
import TwitterLogo from '../../assets/twitter.png';
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

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <img src={TwitterLogo} alt="twitterlogo" />
        </div>

        <SidebarRow title="Home" Icon={HomeIcon}/>
        <SidebarRow title="Explore" Icon={HashtagIcon}/>
        <SidebarRow title="Notifications" Icon={BellIcon}/>
        <SidebarRow title="Messages" Icon={MailIcon}/>
        <SidebarRow title="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarRow title="Lists" Icon={CollectionIcon}/>
        <SidebarRow title="SignOut" Icon={UserIcon}/>
        <SidebarRow title="More" Icon={DotsCircleHorizontalIcon}/>
    </div>
  )
}

export default Sidebar