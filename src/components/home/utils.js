import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';


export const addVisibilitySensor = (WrappedComponent) => {
  class WithVisibilitySensor extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isActive: true,
      };

      this.onVisibilityChange = this.onVisibilityChange.bind(this);
    }

    onVisibilityChange(isVisible) {
      if (isVisible) {
        this.setState({
          isActive: false,
        });
      }
    }

    render() {
      return (
        <VisibilitySensor
          onChange={this.onVisibilityChange}
          active={this.state.isActive}
          partialVisibility={true}
          minTopValue={100}
        >
          <WrappedComponent {...this.props} isVisible={!this.state.isActive} />
        </VisibilitySensor>
      );
    }
  }

  return WithVisibilitySensor;
};
