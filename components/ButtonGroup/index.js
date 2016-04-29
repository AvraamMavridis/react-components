/**
* Button Component
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import React, { Component, PropTypes }            from 'react';
import ReactDOM                                   from 'react-dom';
import { buttonStyle, disabledStyle, hoverStyle } from '../styles/button';
import Proto                                      from '../proto';

export default class ButtonGroup extends Proto
{

  static propTypes = {
    children    : PropTypes.node,
    disabled    : PropTypes.bool,
    nativeAttrs : PropTypes.object,
    ...Proto.propTypes
  };

  static defaultProps = {
    disabled    : void(0)
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
        console.error( '<ButtonGroup/> should have wrap <Buttons/>' );
    }
  }

  renderChildren()
  {
    const { children } = this.props;
    return children.map( ( child,i ) => {

      let style = {
        borderTopLeftRadius: i === 0 ? '5px' : '0px',
        borderTopRightRadius: i === children.length-1 ? '5px' : '0px',
        borderBottomLeftRadius: i === 0 ? '5px' : '0px',
        borderBottomRightRadius: i === children.length-1 ? '5px' : '0px',
      }

      if( i !== children.length-1  )
      {
        style = { ...style, borderRight: '1px solid white' }
      }

      return React.cloneElement( child, {
        key   : i,
        style
      })
    } );
  }

  render() {
    const {
      children,
      disabled,
      className,
      nativeAttrs
    } = this.props;


    return (<span
                 className={ className }
                 onClick={ this.handleClick.bind( this ) }
                    { ...nativeAttrs } >
                    { this.renderChildren() }
            </span>)
  }
}
