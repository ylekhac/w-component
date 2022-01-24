'use strict';

var styled = require('styled-components');

const style = styled.css `
  width: 100%;
  display: block;
  display: -webkit-box;
  line-height: initial;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const one = styled.css `
  ${style};
  -webkit-line-clamp: 1;
`;
const two = styled.css `
  ${style};
  -webkit-line-clamp: 1;
`;
const three = styled.css `
  ${style};
  -webkit-line-clamp: 1;
`;

var _lineOverflow = /*#__PURE__*/Object.freeze({
  __proto__: null,
  one: one,
  two: two,
  three: three
});

exports._lineOverflow = _lineOverflow;
exports.one = one;
exports.three = three;
exports.two = two;