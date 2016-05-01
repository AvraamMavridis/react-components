import { main, white, disabled, mainHover } from './colors';

export const tabStyle = {
  background       : main,
  color            : white,
  fontSize         : '14px',
  borderRadius     : '2px',
  padding          : '5px',
  border           : 'none',
  outline          : 'none',
  cursor           : 'pointer'
};

export const hoverStyle = {
  background : mainHover
};

export const disabledStyle = {
  background : disabled,
  cursor     : 'default'
};
