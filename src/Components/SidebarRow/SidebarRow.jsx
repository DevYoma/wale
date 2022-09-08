import React from 'react'
import './SidebarRow.css';

const SidebarRow = ({ title, Icon}) => {
    // console.log(props);
  return (
    <div className='sidebarRow'>
        <p className='sidebarRow__text'>{title}</p>
        <Icon className="sidebarRow__icon"/>
    </div>
  )
}

export default SidebarRow