import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  grid-area: sidebar;
  background: #00283B;
  width: ${({ isOpen }) => (isOpen ? '210px' : '64px')};
  height: 100vh;
  margin-top:5%;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  overflow-x: hidden;
  
  /* On mobile, sidebar is fixed and slides in from left */
  @media screen and (max-width: 768px) {
    width: 300px;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    box-shadow: ${({ isOpen }) => (isOpen ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none')};
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ isOpen }) => (isOpen ? 'space-between' : 'center')};
  padding: ${({ isOpen }) => (isOpen ? '1rem' : '1rem 0')};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Logo = styled.div`
  color: white;
  font-size: ${({ isOpen }) => (isOpen ? '1.5rem' : '1.5rem')};
  font-weight: bold;
  display: flex;
  margin-top:20px;
  margin-left:30px;
  align-items: center;
  
  svg {
    font-size: 1.8rem;
    margin-right: ${({ isOpen }) => (isOpen ? '0.5rem' : '0')};
    
  }
  
  span {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

export const SidebarToggle = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  
  &:hover {
    color: #e94560;
  }
  
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const SidebarMenu = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 80px);
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #b0b0b0;
  padding: ${({ isOpen }) => (isOpen ? '0.75rem 1rem' : '0.75rem')};
  margin: 0.25rem ${({ isOpen }) => (isOpen ? '0.5rem' : '0.25rem')};
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.5rem;
    min-width: ${({ isOpen }) => (isOpen ? '1.5rem' : '100%')};
    margin-right: ${({ isOpen }) => (isOpen ? '0.75rem' : '0')};
    text-align: center;
  }
  
  span {
    white-space: nowrap;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
  
  &.active {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border-left: ${({ isOpen }) => (isOpen ? '4px solid #e94560' : 'none')};
    padding-left: ${({ isOpen }) => (isOpen ? 'calc(1rem - 4px)' : '0.75rem')};
  }
`;

export const SidebarFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: absolute;
  bottom: 0;
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen && window.innerWidth <= 768 ? 'block' : 'none')};
  z-index: 998;
  transition: all 0.3s ease-in-out;
`;

export const SidebarTooltip = styled.div`
  position: absolute;
  left: 70px;
  background: #333;
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 1000;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
    border-width: 5px 5px 5px 0;
    border-style: solid;
    border-color: transparent #333 transparent transparent;
  }
`;

export const SidebarLinkContainer = styled.div`
  position: relative;
  
  &:hover ${SidebarTooltip} {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }
`;

export const SidebarSection = styled.div`
  margin-bottom: 1rem;
  
  h4 {
    color: #888;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0 1rem;
    margin: 1rem 0 0.5rem;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;
