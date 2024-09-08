import { useState } from 'react';
import { Button, Layout } from 'antd';
import './Navbar.css'
import Logo from './Logo';
import MenuList from './MenuList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const {Header, Sider} = Layout


function Navbar() {

  const [collapsed, setCollapsed] = useState(false)


  return (
    <Layout>
      <Sider className='sidebar' collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <Logo />
        <MenuList />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? '80px' : '200px' }}>
      <Header className={`header-shrink ${collapsed ? 'collapsed' : 'expanded'}`}>
          <Button onClick={() => setCollapsed(!collapsed)} className='toggle-btn' type='text' icon={collapsed ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />} />
        </Header>
      </Layout>
    </Layout>
  );
}

export default Navbar;