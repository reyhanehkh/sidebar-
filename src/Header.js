import React from 'react'
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from './context';
function Header() {
    const {openSidebar} = useGlobalContext();

  return (
    <header>
    <div className='header'>
        <button className="sidebar-toggle" onClick={openSidebar}>
                    <FaBars />
               </button>
     </div>
     </header>
  )
}

export default Header