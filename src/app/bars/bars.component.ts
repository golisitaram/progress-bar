import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css'],
  inputs : ['progressbar','limit'],
  animations: [
    trigger('widthAnimation', [
        transition('* <=> *', [style({ width: '0px' }),
            animate('1000ms')
        ])
    ]),
  ]
})
export class BarsComponent implements OnInit {

  constructor() { 
  }
  ngOnInit() {
  }
  progressbar: any;
  limit: number;
}
