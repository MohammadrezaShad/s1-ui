'use client';

import React, {useEffect, useState} from 'react';
import {css, cx} from '@styled/css';

interface CountdownProps {
  seconds: number;
  onTimerEnd: () => void;
}

const CountdownTimer: React.FC<CountdownProps> = ({seconds, onTimerEnd}) => {
  const [timeLeft, setTimeLeft] = useState<number>(seconds);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft === 0) {
          clearInterval(countdownInterval);
          onTimerEnd();
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [onTimerEnd]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const _seconds = timeLeft % 60;
    return `${String(minutes).padStart(2, '0')}:${String(_seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <p className={cx('fa_num', css({color: 'primary_500', textStyle: 'body12_medium'}))}>
        {formatTime()}
      </p>
    </div>
  );
};

export default CountdownTimer;
