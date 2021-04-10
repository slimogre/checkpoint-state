import React from 'react'

const Appp = () => {
    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);
  
    React.useEffect(() => {
      let interval = null;
  
      if (timerOn) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!timerOn) {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [timerOn]);
  
    return (
        <div>
      <div className="Timers">
        <div id="display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
      </div>
       <div id="buttons">
       {!timerOn && time === 0 && (
         <button onClick={() => setTimerOn(true)}>Start</button>
       )}
       <div>
       {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
       </div>
       <div>
       {!timerOn && time > 0 && (
         <button onClick={() => setTime(0)}>Reset</button>
       )}
       </div>
       </div>
       </div>
          );
  };
  
  export default Appp;
