/**
* Button Component
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import React, { Component, PropTypes }            from 'react';
import { buttonStyle, disabledStyle, hoverStyle } from '../styles/button';
import Proto                                      from '../proto';

export default class Button extends Proto
{

  static propTypes = {
    label       : PropTypes.string,
    name        : PropTypes.string,
    type        : PropTypes.oneOf([ 'button', 'reset', 'submit' ] ),
    children    : PropTypes.node,
    disabled    : PropTypes.bool,
    nativeAttrs : PropTypes.object,
    ...Proto.propTypes
  };

  static defaultProps = {
    type             : 'button',
    disabled         : void(0),
    nativeAttributes : {}
  };

  constructor( props )
  {
    super( props );
  }

  componentWillMount()
  {
    const { label, children } = this.props;

    if( !Boolean( label ) && !Boolean( children ) )
    {
        console.error( '<Button/> should have "label" attribute or wrap other elements' );
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
      nativeAttributes
    } = this.props;

    const _buttonLabel   = label ? label : children;
    const _name          = name ? name : _buttonLabel;
    const _disabledStyle = disabled ? disabledStyle : {};
    const _hoverStyle    = this.state.hover && !disabled ? hoverStyle : {};
    const _buttonStyle   = { ...buttonStyle, ..._disabledStyle, ..._hoverStyle };

    return (<button style={ _buttonStyle }
                    onClick={ this.handleClick.bind( this ) }
                    onDoubleClick={ this.handleDoubleClick.bind( this ) }
                    onMouseOver={ this.handleMouseOver.bind( this ) }
                    onMouseOut={ this.handleMouseOut.bind( this ) }
                    onMouseDown={ this.handleMouseOut.bind( this ) }
                    onMouseEnter={ this.handleMouseEnter.bind( this ) }
                    onMouseLeave={ this.handleMouseLeave.bind( this ) }
                    onMouseUp={ this.handleMouseUp.bind( this ) }
                    onContextMenu={ this.handleDragExit.bind( this ) }
                    type={ type }
                    ariaLabel={ _buttonLabel }
                    name={ _name }
                    role="button"
                    className={ className }
                    { ...nativeAttrs } >
              { _buttonLabel }
            </button>)
  }
}
