import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('use Effect');
    window.addEventListener('resize', checkSize);
    // cleanup
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });

  console.log('render');

  return (
    <>
      <h2>useEffect cleanup</h2>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
