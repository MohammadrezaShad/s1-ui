'use client';

import {useEffect, useState} from 'react';
import {useFormState} from 'react-dom';
import {css} from '@styled/css';
import Link from 'next/link';
import {useParams, useRouter} from 'next/navigation';

import {Button} from '@/components';
import {FormStatus} from '@/constants';
import {EMPTY_FORM_STATE} from '@/utils';

import updateWorkingHours from '../_actions/update-working-hours';
import TimeSelect from './time-select';

type TimeRange = {
  from: string;
  to: string;
};

type WorkHour = {
  day: string;
  open24Hours: boolean;
  closed: boolean;
  timeRanges: TimeRange[];
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WorkHoursForm = () => {
  const params = useParams();
  const router = useRouter();
  const [formState, action] = useFormState(updateWorkingHours, EMPTY_FORM_STATE);

  const initialHoursState: WorkHour[] = daysOfWeek.map(day => ({
    day,
    open24Hours: false,
    closed: false,
    timeRanges: [{from: '06:00 AM', to: '06:00 PM'}],
  }));

  const [hours, setHours] = useState<WorkHour[]>(initialHoursState);
  const {bizId} = params;

  const handleCheckboxChange = (index: number, field: 'open24Hours' | 'closed') => {
    const newHours = [...hours];
    newHours[index][field] = !newHours[index][field];
    setHours(newHours);
  };

  const handleTimeChange = (
    dayIndex: number,
    timeIndex: number,
    field: 'from' | 'to',
    value: string,
  ) => {
    const newHours = [...hours];
    newHours[dayIndex].timeRanges[timeIndex][field] = value;
    setHours(newHours);
  };

  const addTimeRange = (dayIndex: number) => {
    const newHours = [...hours];
    newHours[dayIndex].timeRanges.push({from: '06:00 AM', to: '06:00 PM'});
    setHours(newHours);
  };

  const removeTimeRange = (dayIndex: number, timeIndex: number) => {
    const newHours = [...hours];
    newHours[dayIndex].timeRanges.splice(timeIndex, 1);
    setHours(newHours);
  };

  useEffect(() => {
    if (formState?.status === FormStatus.ERROR) {
      alert(formState.message);
    }
    if (formState?.status === FormStatus.SUCCESS) {
      router.push(`/setup/${bizId}/specialties`);
    }
  }, [formState, router, bizId]);

  return (
    <form
      action={action}
      className={css({
        bgColor: 'white',
        p: '8',
        rounded: 'sm',
        w: 'full',
        border: '1px solid token(colors.grey_200)',
      })}
    >
      <input type='hidden' name='id' value={bizId} />
      <input type='hidden' name='daily-work-time' value={JSON.stringify(hours)} />
      {hours.map((hour, dayIndex) => (
        <div key={crypto.randomUUID()} className={css({mb: '10'})}>
          <div
            key={hour.day}
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            })}
          >
            <div
              className={css({
                display: 'flex',
                gap: '2',
                alignItems: 'start',
              })}
            >
              <span
                className={css({
                  fontSize: 'lg',
                  lineHeight: 'lg',
                  fontWeight: 'semibold',
                  w: '[140px]',
                })}
              >
                {hour.day}
              </span>
              {!hour.open24Hours && !hour.closed && (
                <div
                  className={css({
                    display: 'flex',
                    flexDir: 'column',
                    gap: '2',
                    alignItems: 'start',
                  })}
                >
                  {hour.timeRanges.map((timeRange, timeIndex) => (
                    <div
                      key={crypto.randomUUID()}
                      className={css({display: 'flex', columnGap: '4', mb: '4'})}
                    >
                      <TimeSelect
                        label='From'
                        value={timeRange.from}
                        onChange={value => handleTimeChange(dayIndex, timeIndex, 'from', value)}
                      />
                      <span className={css({alignSelf: 'center'})}> - </span>
                      <TimeSelect
                        label='To'
                        value={timeRange.to}
                        onChange={value => handleTimeChange(dayIndex, timeIndex, 'to', value)}
                      />
                      <button
                        type='button'
                        onClick={() => removeTimeRange(dayIndex, timeIndex)}
                        className={css({
                          w: '6',
                          h: '6',
                          ml: '2',
                          color: 'red.500',
                          rounded: 'xs',
                          _hover: {color: 'red.400'},
                          aspectRatio: 'square',
                          cursor: 'pointer',
                        })}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={css({display: 'flex', flexDir: 'column', gap: '2', mx: '4'})}>
              <label
                htmlFor={`open24Hours-${dayIndex}`}
                className={css({display: 'flex', alignItems: 'center'})}
              >
                <input
                  type='checkbox'
                  checked={hour.open24Hours}
                  onChange={() => handleCheckboxChange(dayIndex, 'open24Hours')}
                  className={css({mr: '1.5'})}
                  id={`open24Hours-${dayIndex}`}
                />
                <span>Open 24 hours</span>
              </label>
              <label
                htmlFor={`closed-${dayIndex}`}
                className={css({display: 'flex', alignItems: 'center'})}
              >
                <input
                  type='checkbox'
                  checked={hour.closed}
                  onChange={() => handleCheckboxChange(dayIndex, 'closed')}
                  className={css({mr: '1.5'})}
                  id={`closed-${dayIndex}`}
                />
                <span>Closed</span>
              </label>
            </div>
          </div>

          <button
            type='button'
            onClick={() => addTimeRange(dayIndex)}
            className={css({
              ml: '4',
              mb: '4',
              px: '2',
              py: '1',
              color: 'sky.500',
              _hover: {color: 'sky.400'},
              textStyle: 'buttonText',
              cursor: 'pointer',
            })}
          >
            Add Time Range
          </button>
        </div>
      ))}
      <Button visual='contained' size='md' color='danger' type='submit'>
        Save and continue
      </Button>
      <Link
        href={`/setup/${bizId}/specialties`}
        className={css({
          ml: '4',
          mb: '4',
          px: '4',
          py: '2.5',
          bgColor: 'transparent',
          color: 'blue.500',
          rounded: 'lg',
          _hover: {color: 'blue.400'},
        })}
      >
        Skip for now
      </Link>
    </form>
  );
};

export default WorkHoursForm;
