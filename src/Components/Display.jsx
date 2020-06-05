import React from 'react';

function Display(props) {
  return (
    <section className='display'>
      <p id='number'>{props.display}</p>
      <div id='history'>
        <p>History:</p>
        <p>{props.history}</p>
      </div>
    </section>
  );
}

export default Display;
