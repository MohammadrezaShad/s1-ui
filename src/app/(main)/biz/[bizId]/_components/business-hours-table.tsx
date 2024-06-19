import React from 'react';
import {css} from '@styled/css';

import {WorkHourType} from '@/graphql/generated/types';

import {isBusinessOpen} from '../utils';

const formatTime = (time: string): string => {
  const [hour, minute] = time.split(' ')[0].split(':').map(Number);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12; // Convert 0 to 12 for 12 AM
  return `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
};

const renderWorkHours = (workHours: 'Closed' | 'Open 24 hours' | string[]) => {
  if (Array.isArray(workHours)) {
    return (
      <ul>
        {workHours.map(wh => (
          <li key={crypto.randomUUID()}>{wh}</li>
        ))}
      </ul>
    );
  }
  return workHours;
};

const formatWorkHours = (workHours: WorkHourType[]): JSX.Element => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDay = new Date().toLocaleDateString('en-US', {weekday: 'long'});

  const getWorkHoursString = (hours: WorkHourType | undefined) => {
    if (!hours) return 'Closed';
    if (hours.closed) return 'Closed';
    if (hours.open24Hours) return 'Open 24 hours';
    if (!hours.timeRanges) return 'Closed';

    return hours.timeRanges.map(range => `${formatTime(range.from!)} - ${formatTime(range.to!)}`);
  };

  const isBusinessCurrentlyOpen = isBusinessOpen(workHours as WorkHourType[], new Date());

  if (!workHours) return <div>Nothing found!</div>;

  return (
    <table className={css({w: 'full'})}>
      <tbody>
        {workHours?.map((workHour, index) => {
          const day = daysOfWeek[index];
          const isToday = currentDay === workHour.day;
          const workHoursString = getWorkHoursString(workHour);
          return (
            <React.Fragment key={day}>
              <tr className={css({verticalAlign: 'top'})}>
                <th className={css({pr: '4', textAlign: 'left'})}>{day}</th>
                <td className={css({pr: '4', textAlign: 'left'})}>
                  {renderWorkHours(workHoursString)}
                </td>
                <td className={css({pr: '4', textAlign: 'left'})}>
                  {isToday && isBusinessCurrentlyOpen ? (
                    <span className={css({color: 'green.600'})}>Open now</span>
                  ) : (
                    ''
                  )}
                </td>
              </tr>
              <tr className={css({h: '2'})} />
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

type Props = {
  workHours: WorkHourType[];
};

const BusinessHoursTable: React.FC<Props> = ({workHours}) => <>{formatWorkHours(workHours)}</>;

export default BusinessHoursTable;
