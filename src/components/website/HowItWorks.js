import React, { Component } from 'react';
import { Row, Col, Container, Collapse, Button } from 'reactstrap';
import Goalkeeper from '../../images/goalkeeper.svg';
import Glory from '../../images/glory.svg';
import Create from '../../images/create.svg';
import Invite from '../../images/invite.svg';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

export default class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <Container fluid id="How-it-works">
        <Row className="how-it-works">
          <Col sm={6} className="text-center mt-auto mb-auto">
            <h3>Create a Competition</h3>
            <p>
              Easily setup a CupMarch knockout competition <FaAngleRight />
            </p>
            <Button
              color="primary"
              onClick={this.toggle}
              style={{ marginBottom: '1rem' }}
            >
              Info
            </Button>
            <Collapse isOpen={this.state.collapse}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed
                vel lectus. Donec odio tempus molestie, porttitor ut, iaculis
                quis, sem. Maecenas ipsum velit, consectetuer eu lobortis ut,
                dictum at dui. Proin mattis lacinia justo. Etiam commodo dui
                eget wisi. Aliquam erat volutpat. Integer lacinia. Pellentesque
                arcu. Integer malesuada. Suspendisse sagittis ultrices augue. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Maecenas fermentum, sem
                in pharetra pellentesque, velit turpis volutpat ante, in
                pharetra metus odio a lectus.
              </p>
            </Collapse>
          </Col>
          <Col sm={6} className="create-competition">
            <img className="img-fluid" src={Create} alt="Create compition" />
          </Col>

          <Col sm={6} className="friends">
            <img className="img-fluid" src={Invite} alt="Invite your friends" />
          </Col>
          <Col sm={6} className="text-center mt-auto mb-auto">
            <h3>Invite your friends</h3>
            <p>
              Use email or social media to invite others to join your
              competition
            </p>
          </Col>

          <Col sm={6} className="text-center mt-auto mb-auto">
            <h3>Predict weekly football fixtures</h3>
            <p>Go head to head to see who advances to the next round</p>
          </Col>
          <Col sm={6} className="predict-fixtures">
            <img className="img-fluid" src={Goalkeeper} alt="goalkeeper" />
          </Col>

          <Col sm={6} className="glory">
            <img className="img-fluid" src={Glory} alt="celebration" />
          </Col>
          <Col sm={6} className="text-center mt-auto mb-auto">
            <h3>Celebrate</h3>
            <p>The last player standing wins!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
