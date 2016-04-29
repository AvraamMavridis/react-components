/**
* Proto contains the native events
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import React, { Component, PropTypes } from 'react';

const noop = e => e;

export default class Proto extends Component
{

  static propTypes =
  {
      onClick       : PropTypes.func,
      onContextMenu : PropTypes.func,
      onDoubleClick : PropTypes.func,
      onDrag        : PropTypes.func,
      onDragEnd     : PropTypes.func,
      onDragEnter   : PropTypes.func,
      onDragExit    : PropTypes.func,
      onDragLeave   : PropTypes.func,
      onDragOver    : PropTypes.func,
      onDragStart   : PropTypes.func,
      onDrop        : PropTypes.func,
      onMouseDown   : PropTypes.func,
      onMouseEnter  : PropTypes.func,
      onMouseLeave  : PropTypes.func,
      onMouseMove   : PropTypes.func,
      onMouseOut    : PropTypes.func,
      onMouseOver   : PropTypes.func,
      onMouseUp     : PropTypes.func       
  };

  constructor( props )
  {
      super( props );

      this.state =
      {
          hover  : false,
      };
  }

  handleChange( e )
  {
      this.props.onChange ? this.props.onChange( e ) : noop( e );
  }

  handleClick( e )
  {
      this.props.onClick ? this.props.onClick( e ) : noop( e );
  }

  handleDrag( e )
  {
      this.props.onDrag ? this.props.onDrag( e ) : noop( e );
  }

  handleDragEnd( e )
  {
      this.props.onDragEnd ? this.props.onDragEnd( e ) : noop( e );
  }

  handleDragExit( e )
  {
      this.props.onDragExit ? this.props.onDragExit( e ) : noop( e );
  }

  handleDragLeave( e )
  {
      this.props.onDragLeave ? this.props.onDragLeave( e ) : noop( e );
  }

  handleDragOver( e )
  {
      this.props.onDragOver ? this.props.onDragOver( e ) : noop( e );
  }

  handleDragStart( e )
  {
      this.props.onDragStart ? this.props.onDragStart( e ) : noop( e );
  }

  handleDrop( e )
  {
      this.props.onDrop ? this.props.onDrop( e ) : noop( e );
  }

  handleContextMenu( e )
  {
      this.props.onContextMenu ? this.props.onContextMenu( e ) : noop( e );
  }

  handleDoubleClick( e )
  {
      this.props.onDoubleClick ? this.props.onDoubleClick( e ) : noop( e );
  }

  handleBlur( e )
  {
      this.setState( { focus: false } );
      this.props.onBlur ? this.props.onBlur( e ) : noop( e );
  }

  handleFocus( e )
  {
      this.setState( { focus: true } );
      this.props.onFocus ? this.props.onFocus( e ) : noop( e );
  }

  handleMouseDown( e )
  {
      this.setState( { active: true } );
      this.props.onMouseDown ? this.props.onMouseDown( e ) : noop( e );
  }

  handleMouseUp( e )
  {
      this.setState( { active: false } );
      this.props.onMouseUp ? this.props.onMouseUp( e ) : noop( e );
  }

  handleMouseOver( e )
  {
      this.setState( { hover: true } );
      this.props.onMouseOver ? this.props.onMouseOver( e ) : noop( e );
  }

  handleMouseOut( e )
  {
      this.setState( { hover: false } );
      this.props.onMouseOut ? this.props.onMouseOut( e ) : noop( e );
  }

  handleMouseEnter( e )
  {
      this.props.onMouseEnter ? this.props.onMouseEnter( e ) : noop( e );
  }

  handleMouseLeave( e )
  {
      this.setState( { hover: false } );
      this.props.onMouseLeave ? this.props.onMouseLeave( e ) : noop( e );
  }
}
