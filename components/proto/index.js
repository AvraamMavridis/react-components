import React, { Component, PropTypes } from 'react';

const noop = () => void 0;

export default class Proto extends Component
{

  static propTypes = {
    onClick  : PropTypes.func
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
      this.props.onChange ? this.props.onChange( e ) : noop();
  }

  handleClick( e )
  {
      this.props.onClick ? this.props.onClick( e ) : noop();
  }

  handleContextMenu( e )
  {
      this.props.onContextMenu ? this.props.onContextMenu( e ) : noop();
  }

  handleDoubleClick( e )
  {
      this.props.onDoubleClick ? this.props.onDoubleClick( e ) : noop();
  }

  handleBlur( e )
  {
      this.setState( { focus: false } );
      this.props.onBlur ? this.props.onBlur( e ) : '';
  }

  handleFocus( e )
  {
      this.setState( { focus: true } );
      this.props.onFocus ? this.props.onFocus( e ) : '';
  }

  handleMouseDown( e )
  {
      this.setState( { active: true } );
      this.props.onMouseDown ? this.props.onMouseDown( e ) : '';
  }

  handleMouseUp( e )
  {
      this.setState( { active: false } );
      this.props.onMouseUp ? this.props.onMouseUp( e ) : '';
  }

  handleMouseOver( e )
  {
      this.setState( { hover: true } );
      this.props.onMouseOver ? this.props.onMouseOver( e ) : '';
  }

  handleMouseOut( e )
  {
      this.setState( { hover: false } );
      this.props.onMouseOut ? this.props.onMouseOut( e ) : '';
  }
}
