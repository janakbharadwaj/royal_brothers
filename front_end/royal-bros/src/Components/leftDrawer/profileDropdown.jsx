import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

class OverlayVisible extends React.Component {
  state = {
    visible: false,
  };

  handleMenuClick = e => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
          <br/>
        <Menu.Item key="1"><Link to='/orders'>My Rides</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/users'>My Profile</Link></Menu.Item>
        <Menu.Item key="3">Logout</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          user <DownOutlined />
        </span>
      </Dropdown>
    );
  }
}

// ReactDOM.render(<OverlayVisible />, document.getElementById('container'));
export {OverlayVisible}