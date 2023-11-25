import { Menu, Avatar } from 'antd'
import { UserOutlined, CodeOutlined, LogoutOutlined } from '@ant-design/icons'
import { MenuMode } from './types'

const RightMenu: React.FC<MenuMode> = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username">John Doe</span>
          </>
        }>
        <Menu.Item key="project">
          <CodeOutlined /> Projects
        </Menu.Item>
        <Menu.Item key="about-us">
          <UserOutlined /> Profile
        </Menu.Item>
        <Menu.Item key="log-out">
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default RightMenu