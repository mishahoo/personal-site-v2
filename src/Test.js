import React from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

const Test = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h1>Welcome to React</h1>
        <p>
          <Button
            bsStyle="success"
            bsSize="large"
            href="http://react-bootstrap.github.io/components.html"
            target="_blank"
          >
            View React Bootstrap Docs
          </Button>
        </p>
      </Grid>
    </Jumbotron>
  </div>
);

export default Test;
