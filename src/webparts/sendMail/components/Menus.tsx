import * as React from 'react';
import * as $ from 'jquery';

import {IMenuProps, } from './IInterface'

//import style files
import 'bootstrap';
import '../Contents/dashboard.css';

import CcertMenu from './Menu'

export default class CcertMenus extends React.Component<IMenuProps> {
  constructor(props:IMenuProps) {
    super(props);
   }

  public render(): React.ReactElement<IMenuProps> {

    let menus = this.props.menus.map((menu, index)=>{
        return (<CcertMenu menu={menu} />);
    });

    return (
        <div id="components-demo" className="sidebar-sticky">
            {menus}
        </div>
    );
  }
}

