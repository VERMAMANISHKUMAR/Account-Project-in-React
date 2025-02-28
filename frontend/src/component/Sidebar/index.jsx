import { MdDashboard, MdAccountBalance } from 'react-icons/md';
import { AiFillFolderOpen, AiOutlineTransaction } from 'react-icons/ai';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import {
          SidebarContainer,
          Logo as SidebarLogo, // Use Logo but rename it to SidebarLogo
          SidebarToggle as CloseButton, // Use SidebarToggle but rename it to CloseButton
          SidebarMenu,
          SidebarLink,
        } from './SidebarStyles';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarLogo>
        {isOpen ? 'Account' : 'A'}
      </SidebarLogo>
    
      <SidebarMenu>
      <SidebarLink 
          to="/createaccount" 
          isOpen={isOpen}
          activeClassName="active"
        >
          <MdAccountBalance />
          <span>Create Account</span>
        </SidebarLink>
      
        <SidebarLink 
          to="/accountslist" 
          isOpen={isOpen}
          activeClassName="active"
        >
          <MdDashboard />
          <span>Account List</span>
        </SidebarLink>
        <SidebarLink 
          to="/moneytransferlist" 
          isOpen={isOpen}
          activeClassName="active"
        >
          <AiFillFolderOpen />
          <span>Money Transfer List</span>
        </SidebarLink>
        <SidebarLink 
          to="/depositlist" 
          isOpen={isOpen}
          activeClassName="active"
        >
          <FaMoneyCheckAlt />
          <span>Deposit List</span>
        </SidebarLink>
        <SidebarLink 
          to="/cashtransactions" 
          isOpen={isOpen}
          activeClassName="active"
        >
          <AiOutlineTransaction />
          <span>Cash Transaction</span>
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
