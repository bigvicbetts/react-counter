import React from 'react';

export default function ButtonPad(props) {
  return (
    <div>
      <button onClick={props.plusNum}>+</button>
      <button onClick={props.minusNum}>-</button>
      <button onClick={props.setZero}>0</button>
    </div>
  );
}
