import React from 'react';
import { Link } from 'react-router-dom';
import {SidebarData, SidebarSettings} from './SidebarData';
function Sidebar(){
    return(
        <div >
            <div className='Logo'>
                <h3>IM.AI CART</h3>
            </div>
            <ul className='SidebarList'>
            {SidebarData.map((val,key)=>{
            return <li className="row" id={window.location.pathname == val.link? "active":"" } key ={key} 
            onClick={()=>window.location.pathname = val.link}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
                </li>;
            })}
            </ul>
            <ul className='SidebarListB'>
            {SidebarSettings.map((val,key)=>{
            return <li className="row" id={window.location.pathname == val.link? "active":"" } key ={key} 
            onClick={()=>window.location.pathname = val.link}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
                </li>;
            })}
            </ul>
           </div>

    )
}
export default Sidebar