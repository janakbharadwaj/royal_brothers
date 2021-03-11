import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import styles from './RoyalBrosSearch.module.css'
import { Link } from 'react-router-dom'


class ViewFleetModal extends React.Component {
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
        <Button type="teritiary" onClick={this.showModal} className={styles.viewFleetBtn}>
            View All Fleet
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
            <div className={styles.viewFleetInputs}>
                <h1>Search Your Next Ride</h1>
                <h2>Pick Up</h2>
                <form>
                    <input type="date" placeholder='date' required/>
                    <input type="time" placeholder='time' required/>
                    <button className={styles.searchBtn}><Link to='/royalXSearch' style={{textDecoration:"none",color:"black"}}>SEARCH</Link></button>
                </form>
            </div>
        </Modal>
      </>
    );
  }
}

export {ViewFleetModal}