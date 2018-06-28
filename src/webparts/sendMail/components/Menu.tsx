import * as React from 'react';
import * as $ from 'jquery';

import {IMenuProps1, } from './IInterface'
import { Icon } from 'office-ui-fabric-react/lib/Icon';

//import style files
import 'bootstrap';
import '../Contents/dashboard.css';

export default class CcertMenu extends React.Component<IMenuProps1> {
  constructor(props:IMenuProps1) {
    super(props);
   }

  toggle(event) {
    //展开/合并项目
    //polyline->svg->a->h6->div
    var that = $(event.target);
    if (that.is("polyline")) {
        that = that.parent();
    }
    var h6 = $(that).parent().parent();
    var menu = h6.parent();
    var name = h6.find("a:last").text().trim();

    if ($(that).data("feather") == "chevrons-up") {
        menu.find("ul[data-for='" + name + "']").hide();
        $(that).data("feather", "chevrons-down");
        $(that).text("▲");

    } else {
        menu.find("ul[data-for='" + name + "']").show();
        $(that).data("feather", "chevrons-up")
        $(that).text("▼");
    }
  }

  public render(): React.ReactElement<IMenuProps1> {
        let menu = this.props.menu;
        let items = menu.items;

        let link, iconSpan, lis;

//Set the display name
        link = (
          <a className="d-flex align-items-start px-1 nav-link" href="#">{menu.name}</a>
        );

//Set the display icon
        if(items.length > 0){
          iconSpan = (
            <a className="chevrons" href="#" onClick={(e) => { this.toggle(e); }}>
                <span data-feather="chevrons-up">▼</span>
                <span data-feather="chevrons-down" style={{display:"none"}}></span>
<Icon iconName="CompassNW" className="ms-IconExample" />
            </a>
          );
        }
        else
        {
          iconSpan  = (<span data-feather={menu.icon}>❄</span>);
        }

//Set the childen items
        lis = items.map((item, index) => {
                let childenDisplayName = (<a className="nav-link text-nowrap" href="#"><span data-feather={item.icon}>❄</span>{item.name}</a>);
                if(item.items.length > 0){
                  childenDisplayName = (<CcertMenu menu={item} />);
                }

                return (
                  <li className="nav-item" key={index}>
                      {childenDisplayName}
                  </li>
                );
              });

        return (
          <div>
              <h6 className="sidebar-heading d-flex align-items-center px-3" >
                  {iconSpan}
                  {link}
              </h6>
              <ul data-for={menu.name} className="nav flex-column px-4">
                  {lis}
              </ul>
          </div>
        );

  }
}

