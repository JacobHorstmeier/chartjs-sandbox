import React from 'react';
import {Link} from 'react-router-dom';
import VerticalDivider from './../VerticalDivider';




const LiveDemo = () => {
  const data = {};

  return (
    <main className="demo_wrapper">
      {NavLive()}

      <VerticalDivider />

      <h3>Look what we can do!:</h3>
      {/*Chart Here*/}

      <VerticalDivider />

    </main>
  )
}

export default LiveDemo;





const NavLive = () => {
  return (
    <header className="demo_header">
      <h1>react-chartjs-2</h1>
      <Link to="/">Home</Link>{' | '}
      <Link to="/async">Async</Link>{' | '}
      Static
      <p>I need a chart!!</p>
    </header>
  )
}
