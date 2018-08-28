import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ['Home win', 'Draw', 'Away Win'];

const defaultOption = options[0];

export default class Fixture extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentDidMount() {}

  render() {
    return (
      <Row>
        <Col className="text-right">
          {this.props.home}{' '}
          <img src={this.props.homeCrest} alt={this.props.home} />
        </Col>
        <Col className="text-center">v</Col>
        <Col className="text-left">
          <img src={this.props.awayCrest} alt={this.props.away} />{' '}
          {this.props.away}
        </Col>
        <Col>
          <Dropdown
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an result"
          />
        </Col>
      </Row>
    );
  }
}
