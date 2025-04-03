import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';
import { Container, Button } from 'react-bootstrap';

function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Container className="my-4">
      <h1>Counter Example</h1>
      <h2>Count: {count}</h2>
      <Button onClick={() => dispatch(increment())} variant="success" className="me-2">
        Increment
      </Button>
      <Button onClick={() => dispatch(decrement())} variant="warning" className="me-2">
        Decrement
      </Button>
      <Button onClick={() => dispatch(reset())} variant="danger">
        Reset
      </Button>
    </Container>
  );
}

export default App;