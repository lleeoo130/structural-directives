import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `

      <code>
      < div *ngFor="let color of colors; index as i; last as l; first as f; even as e; odd as o" >  <br>
            < h2 > [[ i  ]]  [[ color ]] < /h2> <br>
      < /div>
      
      
      </code><br><br>

  <div *ngFor="let color of colors; index as i">   
    <h2> {{i}}   {{ color }} </h2>
  </div>
  
  
  `,
  styles: []
})
export class NgForComponent implements OnInit {

  public colors = ["red", "blue", "green", "yellow"]

  constructor() { }

  ngOnInit() {
  }

}
