export class Menu {
  navigateTo: string;
  display: string;
  visible: boolean;
  tooltip: string;
  // inside constructor are parameters inside parenthesis
    constructor(navigateTo: string, display: string, visible:boolean, tooltip:string) {
      this.navigateTo=navigateTo;
      this.display=display;
      this.visible=visible;
      this.tooltip=tooltip;
    }
}
