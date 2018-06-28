//import * as React from 'react';
//import * as $ from 'jquery';

//import {IMenuProps, } from './IInterface'


////import style files
//import 'bootstrap';
//import '../Contents/dashboard.css';

//export default class CcertMenu2 extends React.Component<IMenuProps> {
//  constructor(props:IMenuProps) {
//    super(props);
//   }
//  public render(): React.ReactElement<IMenuProps> {

//                //<CcertMenu menus={menu.items} />

//    let menus = this.props.menus.map((menu, index)=>{

//        let items = menu.items;
//        let link, iconSpan, lis;

////Set the display name
//        link = (
//          <a className="d-flex align-items-start px-1 nav-link" href="#">{menu.name}</a>
//        );

////Set the display icon
//        if(items.length > 0){
//          iconSpan = (
//            <a className="chevrons" href="#" >
//                <span data-feather="chevrons-up"></span>
//                <span data-feather="chevrons-down" style={{display:"none"}}></span>
//            </a>
//          );
//        }
//        else
//        {
//          iconSpan  = (<span data-feather={menu.icon} />);
//        }

////Set the childen items
//        lis = items.map((item, index) => {
//        let childenDisplayName = (<a className="nav-link text-nowrap" href="#"><span data-feather={item.icon}></span>{item.name}</a>);
//        if(item.items.length > 0){
//          childenDisplayName = (<CcertMenu menus={item.items} />);
//        }
//                  return (
//                    <li className="nav-item" key={index}>
//                        {childenDisplayName}
//                    </li>
//                  );
//                });




//        return (
//          <div>
//              <h6 className="sidebar-heading d-flex align-items-center px-3" >
//                  {iconSpan}
//                  {link}
//              </h6>
//              <ul data-for={menu.name} className="nav flex-column px-4">
//                  {lis}
//              </ul>
//          </div>
//        );
//    });

//    return (
//        <div id="components-demo" className="sidebar-sticky">
//            {menus}
//        </div>
//    );

//  }
//}

