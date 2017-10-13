import React, { Component } from 'react';
import template from './Greeter.tpl';

class Greeter extends Component {
  render() {
    return template(this);
  }
}

export default Greeter;