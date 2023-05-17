import {Layout, Menu} from 'antd';
import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import logo from './logo.svg';
import './style.css';
const { Header} = Layout;


const handleExit = () => {
  localStorage.removeItem('token')
}

const MainHeader = () => (
  <>
    <Header
      style={{
        background: '#FFF',
        padding: '0'
      }}    
    >
      <div className='container'>
        <div className='menu'>
          <img className='logo' src={logo} alt = 'logo'/>
          <Menu 
            theme="light" 
            mode="horizontal"
          >
            <Menu.Item><NavLink to='/'>Поиск</NavLink></Menu.Item>
            <Menu.Item><NavLink to='/favourite'>Избранное</NavLink></Menu.Item>
          </Menu>
        </div>
          <Menu
            theme="light"
            mode='horizontal'
          >
            <Menu.Item onClick={handleExit}>
              <NavLink to='/login'>
                Выйти
              </NavLink>
            </Menu.Item>
          </Menu>
      </div>
    </Header>
    <Outlet/>
  </>
);

export default MainHeader;