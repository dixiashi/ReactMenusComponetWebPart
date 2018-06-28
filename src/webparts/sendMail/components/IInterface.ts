export interface IMenuProps{
  menus:IMenuModel[],
}


export interface IMenuModel{
  name: string,
  //displayText:string,
  icon:string,
  items:IMenuModel[],
}



export interface IMenuProps1{
  menu:IMenuModel,
}
