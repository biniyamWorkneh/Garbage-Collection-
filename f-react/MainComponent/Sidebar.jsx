import React from 'react'
import {CDBSidebar, CDBSidebarContent,
CDBSidebarFooter,CDBSidebarHeader,CDBSidebarMenu,CDBSidebarMenuItem} from 'cdbreact'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial',position:"fixed" }} > 
       <CDBSidebar textColor='white' backgroundColor='rgba(84, 111, 125, 1)' maxWidth='200px'>
       <CDBSidebarHeader  prefix={<i className="fa fa-bars fa-large"></i>}>
         <p>Tsidat system</p>
       </CDBSidebarHeader>
       <CDBSidebarContent className='sidebar-content'>
         <CDBSidebarMenu>
          <NavLink exact to='/'>
            <CDBSidebarMenuItem icon= "check-double">
              finished tasks
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to = '/todo'>
            <CDBSidebarMenuItem icon='tasks to do'>
              tasks to do
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to = '/members'>
            <CDBSidebarMenuItem icon='users'>
              members
            </CDBSidebarMenuItem>
          </NavLink>
         </CDBSidebarMenu>
       </CDBSidebarContent>
       
       <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          Biniyam Workneh       </div>
        </CDBSidebarFooter>
       </CDBSidebar>
       
        </div>
 )
}

export default Sidebar