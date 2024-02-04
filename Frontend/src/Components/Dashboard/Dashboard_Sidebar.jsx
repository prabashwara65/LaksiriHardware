import React from "react";
import { Link  , useNavigate} from 'react-router-dom';

import { BsCart3 , BsGrid1X2Fill , BsFillArchiveFill , BsFillGrid3X2GapFill ,
BsPeopleFill , BsListCheck , BsMenuButtonWideFill , BsFillGearFill} from "react-icons/bs";

function Sidebar (){
    return (

        <aside id="sidebar">

            <div className="sidebar-title">

                <div className="sidebar-brand">
                    <BsCart3 className="icon_header"/> shop

                </div>
                <span className="icon close-icon">x</span>
            
            </div>  

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="" >
                        <BsGrid1X2Fill className="icon"/> Dashboard
                    </a>

                </li>

                <li className="sidebar-list-item">
                    <a href="" >
                        <BsFillArchiveFill className="icon"/> User Management
                    </a>

                </li>

                <li className="sidebar-list-item">
                    <a href="" >
                    <BsFillGrid3X2GapFill className="icon"/> Inventory management
                        
                    </a>

                </li>

                <li className="sidebar-list-item">
                    <a href="" >
                        <BsPeopleFill className="icon"/> Supply management
                    </a>

                </li>

                <li className="sidebar-list-item">
                    <a href="" >
                        <BsListCheck className="icon"/> Employee managemnt
                    </a>

                </li>

                <li className="sidebar-list-item">
                    <a href="" >
                        <BsMenuButtonWideFill className="icon"/> report management
                    </a>

                </li>

                <li className="sidebar-list-item">
                    <a href="" >
                        <BsFillGearFill className="icon"/> Setting
                    </a>

                </li>
            </ul>
          
        </aside>
    )
}
export default Sidebar;