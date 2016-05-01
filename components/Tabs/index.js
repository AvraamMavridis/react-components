/**
* Tabs Component
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import React, { Component, PropTypes }            from 'react';
import { buttonStyle, disabledStyle, hoverStyle } from '../styles/button';
import Proto                                      from '../proto';
import Tab from '../Tab';

export default class Button extends Proto
{

  static propTypes = {
    ...Proto.propTypes
  };

  constructor( props )
  {
    super( props );
  }

  componentWillMount()
  {
    const { children } = this.props;
    const areTabs = [].concat( children ).every( child => child.type === Tab );

    if( !areTabs || !Boolean( children ) )
    {
      console.error( '<Tabs/> component should wrap <Tab/> components' );
    }
  }



  render() {
    const {
      label,
      children,
      disabled,
      type,
      name,
      className,
      style
    } = this.props;



    return (<div>
              { children }
            </div>)
  }
}
