import {css} from '@styled/css';

interface TimeSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const times = Array.from({length: 48}, (_, i) => {
  const hours = String(Math.floor(i / 2)).padStart(2, '0');
  const minutes = i % 2 === 0 ? '00' : '30';
  const period = i < 24 ? 'AM' : 'PM';
  return `${hours}:${minutes} ${period}`;
});

const TimeSelect = ({label, value, onChange}: TimeSelectProps) => (
  <div>
    <label
      htmlFor='time'
      className={css({
        display: 'block',
        fontSize: 'sm',
        lineHeight: 'sm',
        fontWeight: 'medium',
        color: 'gray.700',
        srOnly: true,
      })}
    >
      {label}
    </label>
    <select
      name='time'
      value={value}
      onChange={e => onChange(e.target.value)}
      className={css({
        display: 'block',
        w: 'full',
        pl: '3',
        pr: '10',
        pt: '2',
        pb: '2',
        fontSize: 'base',
        lineHeight: 'base',
        border: '1px solid token(colors.grey_300)',
        _focus: {ring: 'none', ringOffset: 'none', borderColor: 'indigo.500'},
        sm: {fontSize: 'sm', lineHeight: 'sm'},
        rounded: 'md',
      })}
    >
      <option>{label}:</option>
      {times.map(time => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
  </div>
);

export default TimeSelect;
