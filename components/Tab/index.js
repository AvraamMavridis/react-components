/**
* Button Component
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import React, { Component, PropTypes }            from 'react';
import { tabStyle } from '../styles/tab';
import Proto                                      from '../proto';

console.log( tabStyle );

export default class Tab extends Proto
{

  static propTypes = {
    label       : PropTypes.string,
    children    : PropTypes.node,
    ...Proto.propTypes
  };

  constructor( props )
  {
    super( props );
  }

  componentWillMount()
  {
    const { children } = this.props;


    if( !Boolean( children ) )
    {
        console.error( '<Tab/> should wrap some content' );
    }
  }

  render() {
    const {
      label,
      children,
      className=''
    } = this.props;

    console.log( tabStyle );


    return (<div style={ tabStyle }
                    onClick={ this.handleClick.bind( this ) }
                    onDoubleClick={ this.handleDoubleClick.bind( this ) }
                    onMouseOver={ this.handleMouseOver.bind( this ) }
                    onMouseOut={ this.handleMouseOut.bind( this ) }
                    onMouseDown={ this.handleMouseOut.bind( this ) }
                    onMouseEnter={ this.handleMouseEnter.bind( this ) }
                    onMouseLeave={ this.handleMouseLeave.bind( this ) }
                    onMouseUp={ this.handleMouseUp.bind( this ) }
                    onContextMenu={ this.handleDragExit.bind( this ) }
                    ariaLabel={ label }
                    role="button"
                    className={ className }
                    >
              <div style={ tabStyle }>Something</div>
              { children }
            </div>)
  }
}
