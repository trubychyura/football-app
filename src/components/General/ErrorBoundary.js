import React, { Component } from 'react';
import { Col, Alert as BootstrapAlert, Button } from 'react-bootstrap';

class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { error: error.message };
  }

  reload() {
    window.location.reload();
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <Col lg={8} className='bordered p-2  mx-auto'>
          <BootstrapAlert variant={'danger'} className='text-center p-5 my-8'>
            <BootstrapAlert.Heading>
              Oops! Something went wrong!
            </BootstrapAlert.Heading>
            <p>{error}</p>
            <hr />
            <p>
              This may be due to restrictions on server requests per minute.
              Wait a bit and try to reload.
            </p>
            <Button
              onClick={this.reload}
              variant='outline-danger'
              className='px-5'
            >
              Reload
            </Button>
          </BootstrapAlert>
        </Col>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
