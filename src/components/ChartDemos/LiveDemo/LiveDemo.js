import React from 'react';
import {Link} from 'react-router-dom';
import VerticalDivider from './../VerticalDivider';

//import a chart to use from `react-chartjs-2`



const LiveDemo = () => {
  //data needs `labels` and `datasets` properties
  const data = {};

  return (
    <main className="demo_wrapper">
      {NavLive()}

      <VerticalDivider />

      <h3>Look what we can do!:</h3>
      {/*render a chart element here, and pass `data` into a prop called `data`*/}

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
