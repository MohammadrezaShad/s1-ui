'use client';

import {useState} from 'react';
import {css} from '@styled/css';
import {Flex} from '@styled/jsx';

import {Button} from '@/components';

import CountdownTimer from './countdown-timer';

function Timer() {
  const [showResendButton, setShowResendButton] = useState<boolean>(false);

  const handleResendCode = () => {
    // TODO: resend validation code
  };

  const handleTimerEnd = () => {
    setShowResendButton(true);
  };

  return (
    <>
      {!showResendButton && (
        <Flex>
          <p className={css({textStyle: 'body12_medium'})}>Resend in</p>
          &nbsp;
          <CountdownTimer seconds={120} onTimerEnd={handleTimerEnd} />
        </Flex>
      )}
      {showResendButton && (
        <Flex>
          <p className={css({textStyle: 'body12_medium'})}>Didn&apos;t get code?</p>
          <Button visual='text' color='primary' size='sm' type='button' onClick={handleResendCode}>
            Resend
          </Button>
        </Flex>
      )}
    </>
  );
}

export default Timer;
