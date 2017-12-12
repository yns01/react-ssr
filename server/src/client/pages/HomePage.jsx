import React from 'react';

const Home = () => {
  return (
    <div>
      <div>THEEE Home</div>
      <button onClick={() => console.log('clicked')}>Click me</button>
    </div>
  );
};

export default {
  component: Home,
};
