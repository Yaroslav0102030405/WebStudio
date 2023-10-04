import React, { Component } from 'react';
import './Modal.scss';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown )
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
    };
    
    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

  render() {
    return (
      <div className="backdrop" onClick={this.handleBackdropClick}>
        <div className="form">{this.props.children}</div>
      </div>
    );
  }
}