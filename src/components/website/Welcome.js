import React, { Component } from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Fans from '../../images/fans.svg';
import Login from '../Login';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <Row className="welcome h-100">
        <Col xs={12} md={{ size: 8, offset: 2 }}>
          <h1 className="text-center">
            Knockout head to head football prediction game
          </h1>
        </Col>
        <Col md={{ size: 5, offset: 1 }} className="mt-auto mb-auto">
          <p>
            Play head to head in a straight knockout competition. Score goals by
            correctly guessing the result of football games. The player with the
            most goals at the end of the gameweek advances to the next round.
          </p>

          <Button color="primary" onClick={this.toggleModal}>
            Login to create a CupMarch Tournament
          </Button>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggleModal}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggleModal}>
              Login to CupMarch
            </ModalHeader>
            <ModalBody>
              <Login />
            </ModalBody>
          </Modal>
        </Col>
        <Col md={5} className="d-none d-sm-block">
          <img alt="goalkeeper" src={Fans} />
        </Col>
      </Row>
    );
  }
}
