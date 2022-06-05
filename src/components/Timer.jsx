import { useEffect, useState } from 'react';

const Timer = ({onExpired}) => {
  const [timer, setTimer] = useState(300)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevCount => prevCount - 1);
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);
  
  let min = parseInt(timer / 60)
  min = (min<10 && '0') + min 
  let sec = timer % 60
  sec = (sec<10 && '0') + sec 

  if(timer<0){
    return (<div className='timeOver text-center'>
      <h1 className='text-warning'>Timer Expired!</h1>
      {onExpired()}
    </div>)
  }

  return (
    <div className='lead-text text-center'>
      Please fill this form with 5 minutes: <h2>{min +':'+sec}</h2>
    </div>
  );
}

export default Timer;
