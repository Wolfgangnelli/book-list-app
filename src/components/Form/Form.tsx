import React from 'react'
import {Button, Form as FormBootstrap} from 'react-bootstrap';


const Form = () => {
  return (
        <FormBootstrap>
          <FormBootstrap.Group className="mb-3" controlId="formBasicEmail">
            <FormBootstrap.Label>Email address</FormBootstrap.Label>
            <FormBootstrap.Control type="email" placeholder="Enter email" />
            <FormBootstrap.Text className="text-muted">
              We'll never share your email with anyone else.
            </FormBootstrap.Text>
          </FormBootstrap.Group>
    
          <FormBootstrap.Group className="mb-3" controlId="FormBootstrapBasicPassword">
            <FormBootstrap.Label>Password</FormBootstrap.Label>
            <FormBootstrap.Control type="password" placeholder="Password" />
          </FormBootstrap.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </FormBootstrap>
      );
}

export default Form