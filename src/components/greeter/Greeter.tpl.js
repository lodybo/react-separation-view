import React from 'react';

export default (component) => {
  return (
    <h1>
      Greetings, {component.props.name}!
    </h1>
  )
};