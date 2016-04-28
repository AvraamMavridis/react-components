import { main, white, disabled, mainHover } from './colors';

export const buttonStyle = {
  background       : main,
  color            : white,
  fontSize         : '14px',
  borderRadius     : '2px',
  padding          : '5px',
  border           : 'none',
  outline          : 'none',
  cursor           : 'pointer',
  WebkitTransition : 'background .3s',
  transition       : 'background .3s'
};

export const hoverStyle = {
  background : mainHover
};

export const disabledStyle = {
  background : disabled,
  cursor     : 'default'
};
