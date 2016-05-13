/**
* Button Component
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import React, { Component, PropTypes }  from 'react';
import { tabStyle }                     from '../styles/tab';
import Proto                            from '../proto';


export default class Tab extends Proto
{
    static propTypes =
    {
      label        : PropTypes.node.isRequired,
      children     : PropTypes.node.isRequired,
      titleClass   : PropTypes.string,
      contentClass : PropTypes.string,
      ...Proto.propTypes
    };

    constructor( props )
    {
        super( props );
    }

    render()
    {
      const {
        label,
        children,
        className=''
      } = this.props;

      return (<div  onClick={ this.handleClick.bind( this ) }
                    onDoubleClick={ this.handleDoubleClick.bind( this ) }
                    onMouseOver={ this.handleMouseOver.bind( this ) }
                    onMouseOut={ this.handleMouseOut.bind( this ) }
                    onMouseDown={ this.handleMouseOut.bind( this ) }
                    onMouseEnter={ this.handleMouseEnter.bind( this ) }
                    onMouseLeave={ this.handleMouseLeave.bind( this ) }
                    onMouseUp={ this.handleMouseUp.bind( this ) }
                    ariaLabel={ label }
                    role="tabpanel"
                    className={ className } >
                { children }
              </div>)
    }
}
