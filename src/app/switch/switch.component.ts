import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
  
  <code>
    < div [ngSwitch ]="color"  ><br>

        < div *ngSwitchCase="'red'" >  You picked red color < /div ><br>
        < div *ngSwitchCase="'blue'" >  You picked blue color < /div ><br>
        < div *ngSwitchCase="'green'" >  You picked green color < /div ><br>
        < div *ngSwitchDefault >  Pick again < /div > <br>

    < /div >
  </code><br><br>



  <div [ngSwitch]="color"  >
    <div *ngSwitchCase="'red'">  You picked red color </div>
    <div *ngSwitchCase="'blue'">  You picked blue color </div>
    <div *ngSwitchCase="'green'">  You picked green color </div>
    <div *ngSwitchDefault>  Pick again </div> 
  </div>
  
  `,

  styles: []
})
export class SwitchComponent implements OnInit {

  public color = 'red';

  constructor() { }

  ngOnInit() {
  }

}
