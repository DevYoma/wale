import React from 'react'
import './SidebarRow.css';

const SidebarRow = ({ title, Icon }) => {
  return (
    <div className="sidebarRow">
        <Icon className='sidebarRow__icon'/>
        <p className="sidebarRow__text">{title}</p>
    </div>
  )
}

export default SidebarRow