'use client';

import React, {useEffect, useState} from 'react';
import Counter from 'react-countup';
import {css} from '@styled/css';

const arcLimits = {
  start: 288.027,
  end: 72.2566,
};

const gradientColors = ['#0091E6', '#00B5AE', '#18CC6C', '#FFD600', '#FFA800', '#F44336'];

const variablesArray = 'ABCDEFGHIJK'.split('');

export const foregroundStyles: React.CSSProperties = {
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  animationDuration: '100s',
  animationDelay: 'var(--gradientPositionDelay, 0s)',
  animationPlayState: 'running',
  animationTimingFunction: 'linear',
  animationDirection: 'alternate',
} as React.CSSProperties;

const arcDefaultStyles: React.CSSProperties = {
  strokeLinecap: 'round',
  transform: 'rotate(0.625turn)',
  transformOrigin: 'center center',
  strokeDasharray: `${arcLimits.start + 1}px, ${arcLimits.start + 1}px`,
};

const foregroundArcMaskStyles: React.CSSProperties = {
  ...arcDefaultStyles,
  stroke: 'white',
  transition: 'stroke-dashoffset 500ms ease 0s',
};

const backgroundArcStyles: React.CSSProperties = {
  ...arcDefaultStyles,
  stroke: '#EDF1F2',
  strokeDashoffset: arcLimits.end,
};

export type GaugeTypes =
  | 'battery'
  | 'defLevel'
  | 'fuelLevel'
  | 'coolantTemp'
  | 'oilTemp'
  | 'oilPressure'
  | 'stateOfCharge';

type GradientKeyframes = {
  [k: number]: number[];
};

export interface GaugeColors {
  reflect?: boolean;
  reverse?: boolean;
  colorStops: GradientKeyframes;
  CSSGradientString?: string;
}

export interface GaugeProps {
  alertLow?: number;
  alertHigh?: number;
  colors: GaugeColors;
  decimals?: number;
  icon?: string | React.ReactNode;
  label: string;
  max: number;
  min: number;
  maxLabel: string;
  minLabel: string;
  type: GaugeTypes;
  unit?: string;
  value: number;
  valuePrefix?: string;
  valueSuffix?: string;
}

const calculatePercentageValue = (value: number, min: number, max: number, integer?: boolean) => {
  const range = max - min;
  const percentage = value <= 0 ? 0 : (value - min) / range;
  return integer ? Math.round(percentage * 100) : percentage;
};

const calculateStrokeDashOffset = (percentage: number) => {
  const strokeDashOffsetRange = arcLimits.start - arcLimits.end;
  const strokeDashOffset = arcLimits.start - percentage * strokeDashOffsetRange;
  return percentage > 0 ? strokeDashOffset : arcLimits.start;
};

export const reverseArray = (array: any[]): any[] =>
  array.map((item, idx) => array[array.length - 1 - idx]);

export const gradientColorArray = (colors: GaugeColors, type: GaugeTypes): string => {
  let colorsArray: string[] = colors.reverse ? reverseArray(gradientColors) : gradientColors;
  if (colors.reflect) colorsArray = colorsArray.slice(0, -1).concat(reverseArray(colorsArray));
  const gradientColorsArray: string[] = colorsArray.map(
    (color, index): string => `${color} var(--${type}${variablesArray[index]})`,
  );
  return gradientColorsArray.toString();
};

const createGradientStyles = (colors: GaugeColors, type: GaugeTypes): React.CSSProperties => {
  if (!colors) return {backgroundColor: '#18CC6C'};
  return {
    backgroundColor: '#18CC6C',
    backgroundImage:
      colors &&
      `conic-gradient(
      from 180deg at 50% 50%,
      ${gradientColorArray(colors, type)}
    )`,
  };
};

export const createGradientStopVariables = (colors: GaugeColors, type: GaugeTypes): string => {
  const variables: string[] = variablesArray.slice(0, colors.colorStops[0].length);
  const syntax = type === 'stateOfCharge' ? '<percentage>' : '<angle>';
  const decorator = type === 'stateOfCharge' ? '%' : 'deg';
  const propertyArray: string[] = variables.map(
    (variable: string, index: number) =>
      `\n@property --${type}${variable} {\n\tsyntax: ${syntax};\n\tinherits: false;\n\tinitial-value: ${colors.colorStops[0][index]}${decorator};\n}`,
  );
  return propertyArray.join('');
};

export const createGradientKeyframes = (
  colorStops: GradientKeyframes,
  type: GaugeTypes,
): string => {
  const colorStopKeys = Object.keys(colorStops);
  const decorator = type === 'stateOfCharge' ? '%' : 'deg';
  const keyframeArray: string[] = colorStopKeys.map((key, index) => {
    const stopsArray: number[] = colorStops[key as unknown as number];
    const keyframe = [`\n\t${key}% {\n`];
    stopsArray.forEach((k: number, i: number) => {
      keyframe.push(`\t\t--${type}${variablesArray[i]}:${k}${decorator};\n`);
    });
    keyframe.push('\t}');
    return keyframe.join('');
  });
  return keyframeArray.join('');
};

const Gauge: React.FC<GaugeProps> = ({
  alertHigh,
  alertLow,
  colors,
  decimals,
  icon,
  label,
  min,
  max,
  minLabel,
  maxLabel,
  type,
  unit,
  value,
  valuePrefix,
  valueSuffix,
}) => {
  const gradientStyles: React.CSSProperties = createGradientStyles(colors, type);

  const [percent, setPercent] = useState<number>(calculatePercentageValue(value, min, max));

  useEffect(() => {
    if (value <= min) {
      setPercent(0);
      return;
    }
    if (value >= max) {
      setPercent(1);
      return;
    }
    setPercent(calculatePercentageValue(value, min, max));
  }, [max, min, value]);

  let showWarning = false;
  if (value) {
    if (!!alertLow && value <= alertLow) showWarning = true;
    if (!!alertHigh && value > alertHigh) showWarning = true;
  }

  return (
    <div className={css({pos: 'relative'})} style={{width: 200}}>
      <style>
        {`
          ${createGradientStopVariables(colors, type)}
          @keyframes ${type} {
            ${createGradientKeyframes(colors.colorStops, type)}
          }
        `}
      </style>
      <div
        className={css({
          mt: '-1',
          ml: '-1',
        })}
        style={{top: -4, left: -4}}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104 104' height='200' width='200'>
          <defs>
            <mask id={`${type}-foreground-mask`}>
              <path
                style={{
                  ...foregroundArcMaskStyles,
                  strokeDashoffset: calculateStrokeDashOffset(percent),
                }}
                d='M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92'
                strokeWidth='8'
                fillOpacity='0'
              />
            </mask>
          </defs>
          <path
            style={backgroundArcStyles}
            d='M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92'
            strokeWidth='8'
            fillOpacity='0'
          />
          <foreignObject width='104' height='104' mask={`url(#${type}-foreground-mask)`}>
            <div
              style={
                {
                  '--gradientPositionDelay': `${percent * 100 > 0 ? '-' : ''}${percent * 100 - 1}s`,
                  animationName: type,
                  ...foregroundStyles,
                  ...gradientStyles,
                } as React.CSSProperties
              }
            />
          </foreignObject>
        </svg>
      </div>
      <div
        className={css({
          pos: 'absolute',
          w: 'full',
          top: 0,
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        })}
        style={{height: 188}}
      >
        <div
          className={css({
            h: '4',
            color: 'yellow.500',
            fontSize: 'lg',
            mb: '1',
          })}
        >
          {showWarning && <span role='img'>⚠</span>}
        </div>
        <div
          className={css({
            mr: !!valueSuffix && !valuePrefix ? '-1' : 'unset',
            color: showWarning ? 'yellow.500' : 'unset',
            fontSize: '2xl',
            fontVariantNumeric: 'tabular-nums',
          })}
        >
          <Counter
            decimals={decimals}
            duration={0.5}
            end={value}
            suffix={valueSuffix || ''}
            preserveValue
          />
        </div>
        <div
          className={css({
            h: '4',
            fontSize: 'xs',
            color: 'grey_400',
            textAlign: 'center',
          })}
        >
          {unit}
        </div>
        <div
          style={{fontSize: '0.625rem'}}
          className={css({
            position: 'absolute',
            bottom: '-2',
            h: '4',
            display: 'flex',
            justifyContent: 'space-between',
            w: 'full',
            px: '5',
          })}
        >
          <div className={css({color: 'gray.300', lineHeight: '3'})}>{minLabel}</div>
          <div style={{fontSize: '.75rem'}} className='-mt-2 pt-1 text-gray-400' role='img'>
            {icon}
          </div>
          <div className={css({color: 'gray.300', lineHeight: '3'})}>{maxLabel}</div>
        </div>
      </div>
      <div
        className={css({
          mt: '1',
          h: '4',
          fontSize: 'xs',
          lineHeight: '3',
          color: 'gray.400',
          textAlign: 'center',
        })}
      >
        {label}
      </div>
    </div>
  );
};

export default Gauge;
