import {WorkHourType} from '@/graphql/generated/types';

export function isBusinessOpen(workHours: WorkHourType[], currentDate: Date): boolean {
  if (!workHours) return false;
  const currentDay = currentDate.toLocaleDateString('en-US', {weekday: 'long'});
  const currentTime = `${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

  const todaysHours = workHours.find(workHour => workHour.day === currentDay);

  if (!todaysHours || todaysHours.closed) {
    return false;
  }

  if (todaysHours.open24Hours) {
    return true;
  }

  if (!todaysHours.timeRanges) {
    return false;
  }

  return todaysHours.timeRanges.some(
    range => range.from && range.to && range.from <= currentTime && currentTime < range.to,
  );
}
