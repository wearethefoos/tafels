import React, { useState } from 'react';
import Score from './Score';
import Dialer from './Dialer';
import Exercise from './Exercise';
import './App.css';

const calculatePoints = (correct, counter, multiplier) => {
  if (!correct) return -100;
  if ([0,1,10].includes(counter) || [0,1,10].includes(multiplier)) return 100;
  if ([2,5].includes(counter) || [2,5].includes(multiplier)) return 200;
  return 500;
}

const newExercise = () =>
  [Math.round(Math.random() * 10), Math.round(Math.random() * 10)];

const checkResponse = ({ counter, multiplier, response }) => {
  if (counter * multiplier === parseInt(response)) {
    return [true, ...newExercise(), calculatePoints(true, counter, multiplier)];
  }

  return [false, counter, multiplier, calculatePoints(false, counter, multiplier)];
}

function App() {
  const [counter, multiplier] = newExercise();
  const [state, setState] = useState({ counter, multiplier, points: 0 });

  const processResponse = (counter, multiplier, response) => {
    const [correct, newCounter, newMultiplier, points] = checkResponse({counter, multiplier, response});
    setState({ correct, counter: newCounter, multiplier: newMultiplier, points: state.points + points });
  }

  console.table(state);

  return (
    <div className="App">
      <Score score={state.points} />
      <Exercise counter={state.counter} multiplier={state.multiplier} />
      <Dialer onSubmit={(response) => processResponse(state.counter, state.multiplier, response)}/>
    </div>
  );
}

export default App;
