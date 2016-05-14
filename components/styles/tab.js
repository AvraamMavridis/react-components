import { main, white, disabled, mainHover, grey } from './colors';

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

export const headerStyle = {
  background : grey,
  padding : '10px 10px 0px 10px',
  borderBottom: `3px solid ${mainHover}`
};

export const contentStyle = {
  background : grey,
  padding : '10px',
  borderRadius     : '2px',
}

export const labelStyle = {
  background       : main,
  color            : white,
  border           : `1px solid ${grey}`,
  display          :  'inline-block',
  padding          : '10px',
  borderRadius     : '5px 5px 0px 0px',
  cursor           : 'pointer'
};

export const activeTabStyle = {
  background : mainHover
};
