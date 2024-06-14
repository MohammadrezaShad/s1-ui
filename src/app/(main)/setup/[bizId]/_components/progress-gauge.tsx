import React from 'react';

import Gauge, {GaugeProps} from './gauge';

type ProgressGaugeProps = Pick<GaugeProps, 'value'>;

const ProgressGauge: React.FC<ProgressGaugeProps> = ({value}) => {
  const options: Omit<GaugeProps, 'value'> = {
    alertLow: 25,
    colors: {
      reverse: true,
      colorStops: {
        0: [45, 144, 360, 360, 360, 360],
        56: [45, 144, 360, 360, 360, 360],
        64: [0, 45, 214, 360, 360, 360],
        75: [0, 0, 0, 158, 315, 360],
        100: [0, 0, 0, 111, 248, 315],
      },
    },
    decimals: 0,
    icon: '⚡️',
    label: '',
    min: 0,
    max: 100,
    minLabel: '0%',
    maxLabel: '100%',
    type: 'battery',
    unit: 'Progress',
    valueSuffix: '%',
  };
  return <Gauge {...options} value={value} />;
};

export default ProgressGauge;
