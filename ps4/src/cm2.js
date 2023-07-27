import React from 'react';

function Example() {
  let count = 0;

  const handleClick = () => {
    count++;
    console.log(count);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
export default Example;