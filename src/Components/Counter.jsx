import React, { useState } from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';

function Counter() {
  const [display, setDisplay] = useState(0);
  const [history, setHistory] = useState(' ');

  const plusNum = () => {
    setDisplay(display + 1);
    setHistory(history + ' ' + display);
  };

  const minusNum = () => {
    setDisplay(display - 1);
    setHistory(history + ' ' + display);
  };

  const setZero = () => {
    setDisplay(0);
    setHistory(history + ' ' + display);
  };

  return (
    <div className='counter'>
      <Display display={display} history={history} />
      <ButtonPad plusNum={plusNum} minusNum={minusNum} setZero={setZero} />
    </div>
  );
}

export default Counter;
