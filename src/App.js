import Header from './Header';
import Body from './Body';
import './App.css';
import React, { useRef, useState } from 'react';

function App() {
  const htmlRef= useRef(null);
  const cssRef= useRef(null);
  const javascriptRef= useRef(null);
  const reactRef= useRef(null);
  const [active, setActive]= useState("html");

  const scrollySection= (ref, act) => {
    ref.current.scrollIntoView({ behavior: "smooth"});
    setActive(act);
  };

  return (
    <div className='main-container'>
      <Header ref={{htmlRef, cssRef, javascriptRef, reactRef}} active={active} scrollySection={scrollySection} />
      <Body ref={{htmlRef, cssRef, javascriptRef, reactRef}} />
    </div>
  );
}

export default App;
