/**
* Tabs Component
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import React, { Component, PropTypes } from 'react';
import { headerStyle, labelStyle, activeTabStyle, contentStyle } from '../styles/tab';
import Proto                           from '../proto';
import Tab                             from '../Tab';
import classNames                      from 'classnames';

export default class Tabs extends Proto
{

  static propTypes = {
      onChange : PropTypes.func,
      activeTab : PropTypes.number,
      ...Proto.propTypes
  };

  constructor( props )
  {
      super( props );
  }

  componentWillMount()
  {
      const { children=[], activeTab=0 } = this.props;
      const areTabs = [].concat( children ).every( child => child.type === Tab );

      if( !areTabs )
      {
        console.error( '<Tabs/> component should wrap <Tab/> components' );
      }

      if( activeTab > children.length - 1 || activeTab < 0 )
      {
        console.error( 'Invalid "activeTab" property' );
      }

      this.setState( { activeTab } );
  }

  /**
   * Sets the active tab
   * @param { Number } activeTabIndex
   */
  setActiveTab( activeTab, e )
  {
      if( this.state.activeTab !== activeTab && this.props.onChange )
      {
          this.props.onChange( activeTab, e );
      }
      this.setState( { activeTab } );
  }

  /**
   * Renders the header of the tabs
   * @return {JSX}
   */
  renderHeader()
  {
      const { children, cssMap, tabClass } = this.props;

      return children.map( ( child, index ) => {
          const activeStyle = index === this.state.activeTab ? activeTabStyle : {};

          return (<span className={ tabClass }
                        style={ { ...labelStyle, ...activeStyle } }
                        role="tab"
                        tabindex={ index }
                        key={ index }
                        onClick={ this.setActiveTab.bind( this, index ) } >
                  { child.props.label }
                 </span>);
     });
  }

  render() {
      const { children, cssMap, containerClass, contentClass, headerClass } = this.props;
      const content = children.filter( ( child, index ) => index === this.state.activeTab )[0];

      return (
      <div className={ containerClass } >
          <div style={ headerStyle } className={ headerClass }>
          {
              this.renderHeader()
          }
         </div>

         <div style={ contentStyle } className={ contentClass }>
             { content }
         </div>
      </div>);
  }
}
