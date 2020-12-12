import React, {useState} from 'react';
import Display from './Components/Display';
import Btn from './Components/Btn';
import './App.css';

function App() {
  const [time, setTime] = useState({s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    
    updatedS++;
    return setTime({s:updatedS, m:updatedM, h:updatedH});
  };

  const wait = () => {
    clearInterval(interv);
    setStatus(2);
    setInterval(300);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();


  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="timer">
               <Display time={time}/>
               <Btn status={status} resume={resume} reset={reset} wait={wait} start={start}/>
          </div>
     </div>
    </div>
  );
}

export default App;
