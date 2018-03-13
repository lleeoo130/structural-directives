import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`

  <code>
    < div  *ngIf="displayName; then thenBlock; else elseBlock" >  < /div ><br>
    <br>
    < ng-template #thenBlock ><br>
      < h2 >  Leo first  < /h2 ><br>
    < /ng-template ><br>
    <br>
    < ng-template #elseBlock ><br>
      < h2 > Hidden Block < /h2 ><br>
    < /ng-template >

    *Changer le booleen displayName.
  
  < /code ><br><br>



  <div  *ngIf="displayName; then thenBlock; else elseBlock">  </div>
  
  <ng-template #thenBlock>
    <h2>Leo first</h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>Hidden Block</h2>
  </ng-template>
  
  `,
  styles: []
})


export class TestComponent implements OnInit {

  displayName = true;

  constructor() { }

  ngOnInit() {
  }

}
