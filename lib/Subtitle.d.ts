/**
 * Subtitle
 * @prop {} icon: src of icon
 * @prop {string} title
 * @prop {string} color
 * @prop {Direction} direction: row | column | row-reserve | column-reserve
 */
/// <reference types="react" />
declare type Direction = 'row' | 'column' | 'row-reverse' | 'column-revere';
interface Props {
    icon?: any;
    title?: string;
    direction?: Direction;
    color?: string;
    children?: string | JSX.Element;
}
export default function (props: Props): JSX.Element;
export {};
