import { Menu } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { faChild } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import { Link } from 'react-router-dom';

const MenuList = () => {
  return (
    <Menu theme='dark' mode='inline' className='menu-bar'>
      <Menu.Item key='domu' icon={<FontAwesomeIcon icon={faHouse} />}>
         <Link to="/">Domů</Link>
      </Menu.Item>

      <Menu.Item key='aktuality' icon={<FontAwesomeIcon icon={faBullhorn} />}>
         <Link to="/news">Aktuality</Link>
      </Menu.Item>

      <Menu.SubMenu key='dospeli' title='Týmy dospělí' icon={<FontAwesomeIcon icon={faPersonWalking} />}>
         <Menu.Item key='adults'>
            <Link to="/teams/adults">Přehled</Link>
         </Menu.Item>
         <Menu.Item key='ateam'>
            <Link to="/teams/adults/ateam">A-Tým</Link>
         </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu key='mladez' title='Týmy mládež' icon={<FontAwesomeIcon icon={faChild} />}>

         <Menu.Item key='youth'>
            <Link to="/teams/youth">Přehled</Link>
         </Menu.Item>
         <Menu.Item key='mlpripravka'>
            <Link to="/teams/youth/u-8">Mladší přípravka</Link>
         </Menu.Item>
         <Menu.Item key='stpripravka'>
            <Link to="/teams/youth/u-10">Starší přípravka</Link>
         </Menu.Item>
         <Menu.Item key='mlzaci'>
            <Link to="/teams/youth/u-12">Mladší žáci</Link>
         </Menu.Item>
         <Menu.Item key='stzaci'>
            <Link to="/teams/youth/u-14">Starší žáci</Link>
         </Menu.Item>

      </Menu.SubMenu>

      <Menu.Item key='klub' icon={<FontAwesomeIcon icon={faFutbol} />}>
         <Link to="/club">O Klubu</Link>
      </Menu.Item>

      <Menu.Item key='kontakt' icon={<FontAwesomeIcon icon={faPhone} />}>
         <Link to="/contact">Kontakt</Link>
      </Menu.Item>
   </Menu>
  )
}

export default MenuList
