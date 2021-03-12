import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import styles from './RoyalBrosSearch.module.css'
import { Link } from 'react-router-dom'


class RoyalBrosXBikeModal extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type="teritiary" onClick={this.showModal}>
            Book Now
        </Button>
        <Modal
          visible={visible}
          width={500}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              
            </Button>,
          ]}
        >
            <div>
                
            </div>
        </Modal>
      </>
    );
  }
}

export {RoyalBrosXBikeModal}