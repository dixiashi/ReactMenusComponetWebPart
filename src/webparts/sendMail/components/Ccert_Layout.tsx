import * as React from 'react';
import * as $ from 'jquery';


//import style files
import '../Contents/bootstrap.min.css';
import '../Contents/dashboard.css';

import CcertMenus from './Menus'
import {IMenuProps, IMenuModel } from './IInterface'


export default class CcertLayout extends React.Component {
  constructor(props) {
    super(props);
    this.handleSendEmailClick = this.handleSendEmailClick.bind(this);
    
    this.state = {
        menu_data:this.getCcertMenuData()
    };

  }

  getCcertMenuData(){
    //TODO:
    //Call the api to get the Menu data from sharepoint list.
    //Currently, I mocked the test data in here.
    return [
              { name: "Home", icon: "home", items: [] },
              { name: "Calendar", icon: "calendar", items: [] },
              {
                  name: "Certification",
                  icon: "home",
                  items: [
                      { name: "Learn", icon: "file-text", items: [] },
                      {
                          name: "Apply",
                          icon: "",
                          items: [
                              { name: 'ASG (Office)', icon: "file-text" , items: []},
                              { name: 'ASG (Skype)', icon: "file-text" , items: []},
                              { name: 'C+E (Azure)', icon: "file-text" , items: []},
                              { name: 'C+E (DevDiv)', icon: "file-text" , items: []},
                              { name: 'C+E (DPG)', icon: "file-text" , items: []},
                              { name: 'C+E (Dynamics)', icon: "file-text" , items: []},
                              { name: 'C+E (Server)', icon: "file-text" , items: []},
                              { name: 'WDG', icon: "file-text" , items: []},
                          ]
                      },
                      {
                          name: "My Status",
                          icon: "home",
                          items: [
                              { name: 'ASG (Office)', icon: "file-text" , items: []},
                              { name: 'ASG (Skype)', icon: "file-text" , items: []},
                              { name: 'C+E (Azure)', icon: "file-text" , items: []},
                              { name: 'C+E (DevDiv)', icon: "file-text" , items: []},
                              { name: 'C+E (DPG)', icon: "file-text" , items: []},
                              { name: 'C+E (Dynamics)', icon: "file-text" , items: []},
                              { name: 'C+E (Server)', icon: "file-text" , items: []},
                              { name: 'WDG', icon: "file-text" , items: []},
                          ]
                      },
                      { name: "Renewal", icon: "file-text" , items: []},
                      { name: "Active Certification", icon: "file-text" , items: []},
                      { name: "Archive Certification", icon: "file-text" , items: []},
                      { name: "All Subscription", icon: "file-text" , items: []},
                  ]
              },
              {
                  name: "Setting & Configuration",
                  icon: "settings",
                  items: [
                      { name: "BG Profile", icon: "file-text", items: [] },
                      { name: "Permission", icon: "file-text", items: [] },
                      { name: "Mail Template", icon: "file-text", items: [] },
                      { name: "CCERT Admin Data", icon: "file-text", items: [] },
                  ]
              },
          ];
  }


  handleSendEmailClick(e) {
    
  }

  public render(): React.ReactElement<any> {

    let menuData = [
              { name: "Home", icon: "home", items: [] },
              { name: "Calendar", icon: "calendar", items: [] },
              {
                  name: "Certification",
                  icon: "home",
                  items: [
                      { name: "Learn", icon: "file-text", items: [] },
                      {
                          name: "Apply",
                          icon: "",
                          items: [
                              { name: 'ASG (Office)', icon: "file-text" , items: []},
                              { name: 'ASG (Skype)', icon: "file-text" , items: []},
                              { name: 'C+E (Azure)', icon: "file-text" , items: []},
                              { name: 'C+E (DevDiv)', icon: "file-text" , items: []},
                              { name: 'C+E (DPG)', icon: "file-text" , items: []},
                              { name: 'C+E (Dynamics)', icon: "file-text" , items: []},
                              { name: 'C+E (Server)', icon: "file-text" , items: []},
                              { name: 'WDG', icon: "file-text" , items: []},
                          ]
                      },
                      {
                          name: "My Status",
                          icon: "home",
                          items: [
                              { name: 'ASG (Office)', icon: "file-text" , items: []},
                              { name: 'ASG (Skype)', icon: "file-text" , items: []},
                              { name: 'C+E (Azure)', icon: "file-text" , items: []},
                              { name: 'C+E (DevDiv)', icon: "file-text" , items: []},
                              { name: 'C+E (DPG)', icon: "file-text" , items: []},
                              { name: 'C+E (Dynamics)', icon: "file-text" , items: []},
                              { name: 'C+E (Server)', icon: "file-text" , items: []},
                              { name: 'WDG', icon: "file-text" , items: []},
                          ]
                      },
                      { name: "Renewal", icon: "file-text" , items: []},
                      { name: "Active Certification", icon: "file-text" , items: []},
                      { name: "Archive Certification", icon: "file-text" , items: []},
                      { name: "All Subscription", icon: "file-text" , items: []},
                  ]
              },
              {
                  name: "Setting & Configuration",
                  icon: "settings",
                  items: [
                      { name: "BG Profile", icon: "file-text", items: [] },
                      { name: "Permission", icon: "file-text", items: [] },
                      { name: "Mail Template", icon: "file-text", items: [] },
                      { name: "CCERT Admin Data", icon: "file-text", items: [] },
                  ]
              },
          ];
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-4 d-none d-md-block bg-light pt-sm-1">
                    <CcertMenus menus={menuData} />
                </nav>

                <main role="main" className="col-md-8 ml-sm-auto col-lg-8 px-4 pt-sm-1">
                    {this.props.children}
                </main >
            </div >
        </div >
    );
  }
}
