import React from 'react';
export interface CalendarProps {
    noSelect?: boolean;
    selected?: any;
    period?: 'all' | 'year' | 'month' | 'week' | 'date';
    fnSelected?: (date: Date) => void;
    disableItem?: (date: any) => boolean;
}
declare const _default: React.MemoExoticComponent<({ selected, fnSelected, period, noSelect, disableItem }: CalendarProps) => JSX.Element>;
/**
 * Calendar component
 * @prop {date object | string format date} selected
 * @prop {function} fnSelected - params of function is {array[MM, DD, YYYY]}
 */
export default _default;
export { default as CalendarMonth } from './Month';
export { default as CalendarYear } from './Year';