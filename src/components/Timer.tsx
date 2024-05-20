import React, { useEffect, useState } from 'react';

interface TimerProps{
    duration : number;
}

const Timer: React.FC<TimerProps> = ({duration}) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        } else return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <p>
      Time left: {`${Math.floor(time / 60)}`.padStart(2, '0')}:
      {`${time % 60}`.padStart(2, '0')}
    </p>
  );
};

export default Timer;
